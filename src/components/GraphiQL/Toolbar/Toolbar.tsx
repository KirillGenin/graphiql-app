import React from 'react';
import styles from './Toolbar.module.scss';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { fetchGraphQLData, graphiqlActions } from '../../../app/slices/graphiqlSlice';
import { Tooltip } from 'react-tooltip';
import { useTranslation } from 'react-i18next';

const Toolbar = () => {
  const dispatch = useAppDispatch();
  const query = useAppSelector((state) => state.graphiql.query);
  const variables = useAppSelector((state) => state.graphiql.variables);
  const loading = useAppSelector((state) => state.graphiql.loading);
  const { t } = useTranslation();

  const getData = React.useCallback(() => {
    dispatch(fetchGraphQLData({ query, variables }));
  }, [dispatch, query, variables]);

  const onFormatQuery = () => {
    let gap = 0;
    const formatQuery = query
      .replace(/ +/g, '')
      .replace(/\n+/g, '\n')
      .split('')
      .map((char, idx, arr) => {
        if (char === '{') {
          gap += 1;
          if (idx !== 0) return ` ${char}`;
        }
        if (char === '}') {
          gap -= 1;
        }
        if (char === ':') return `${char} `;
        if (arr[idx - 1] === '\n') {
          const gapTab = ' '.repeat(gap * 2);
          return `${gapTab}${char}`;
        }
        return char;
      })
      .join('');
    dispatch(graphiqlActions.setQuery(formatQuery));
  };

  return (
    <div className={styles['graphiql-toolbar']}>
      <button
        onClick={getData}
        data-tooltip-id="get"
        data-tooltip-content={`${t('executeQuery')}`}
        data-tooltip-place="top"
        className={styles['graphiql-execute-button']}
        type="button"
      >
        <svg height="1em" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          {loading ? (
            <rect x="0" y="0" width="30" height="30" stroke="#fff" fill="#fff" strokeWidth="5" />
          ) : (
            <path
              d="M1.32226e-07 1.6609C7.22332e-08 0.907329 0.801887 0.424528 1.46789 0.777117L15.3306 8.11621C16.0401 8.49182 16.0401 9.50818 15.3306 9.88379L1.46789 17.2229C0.801886 17.5755 1.36076e-06 17.0927 1.30077e-06 16.3391L1.32226e-07 1.6609Z"
              fill="#fff"
            ></path>
          )}
        </svg>
      </button>
      <Tooltip id="get" />
      <button
        onClick={onFormatQuery}
        data-tooltip-id="format"
        data-tooltip-content={`${t('prettifyQuery')}`}
        data-tooltip-place="top"
        className={styles['graphiql-toolbar-button']}
      >
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M10.2852 24.0745L13.7139 18.0742"
            stroke="currentColor"
            strokeWidth="1.5625"
          ></path>
          <path
            d="M14.5742 24.0749L17.1457 19.7891"
            stroke="currentColor"
            strokeWidth="1.5625"
          ></path>
          <path
            d="M19.4868 24.0735L20.7229 21.7523C21.3259 20.6143 21.5457 19.3122 21.3496 18.0394C21.1535 16.7666 20.5519 15.591 19.6342 14.6874L23.7984 6.87853C24.0123 6.47728 24.0581 6.00748 23.9256 5.57249C23.7932 5.1375 23.4933 4.77294 23.0921 4.55901C22.6908 4.34509 22.221 4.29932 21.7861 4.43178C21.3511 4.56424 20.9865 4.86408 20.7726 5.26533L16.6084 13.0742C15.3474 12.8142 14.0362 12.9683 12.8699 13.5135C11.7035 14.0586 10.7443 14.9658 10.135 16.1L6 24.0735"
            stroke="currentColor"
            strokeWidth="1.5625"
          ></path>
          <path
            d="M4 15L5 13L7 12L5 11L4 9L3 11L1 12L3 13L4 15Z"
            stroke="currentColor"
            strokeWidth="1.5625"
            strokeLinejoin="round"
          ></path>
          <path
            d="M11.5 8L12.6662 5.6662L15 4.5L12.6662 3.3338L11.5 1L10.3338 3.3338L8 4.5L10.3338 5.6662L11.5 8Z"
            stroke="currentColor"
            strokeWidth="1.5625"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
      <Tooltip id="format" />
    </div>
  );
};

export default Toolbar;
