import React from 'react';
import styles from './EditorToolsTabs.module.scss';
import { Tooltip } from 'react-tooltip';
import { graphiqlActions } from '../../../app/slices/graphiqlSlice';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';

const EditorToolsTabs: React.FC = () => {
  const dispatch = useAppDispatch();
  const openAddEditor = useAppSelector((state) => state.graphiql.openAddEditor);
  const activeTab = useAppSelector((state) => state.graphiql.activeTab);

  const onClickActive = (tab: string) => {
    dispatch(graphiqlActions.setActiveTab(tab));
  };

  const isActiveTab = (tab: string) => activeTab === tab.toLowerCase();

  return (
    <div className={styles['graphiql-editor-tools']}>
      <div className={styles['graphiql-editor-tools-tabs']}>
        <button
          className={`${styles['graphiql-un-styled']} ${
            isActiveTab('variables') ? styles['active-tab'] : ''
          }`}
          onClick={() => onClickActive('variables')}
        >
          Variables
        </button>
        <button
          className={`${styles['graphiql-un-styled']} ${
            isActiveTab('headers') ? styles['active-tab'] : ''
          }`}
          onClick={() => onClickActive('headers')}
        >
          Headers
        </button>
      </div>
      <button
        className={styles['graphiql-un-styled']}
        onClick={() => dispatch(graphiqlActions.setOpenAddEditor(!openAddEditor))}
        data-tooltip-id="openEditor"
        data-tooltip-content={openAddEditor ? 'Hide Editor Tools' : 'Show Editor Tools'}
        data-tooltip-place="top"
      >
        <svg
          height="1em"
          viewBox="0 0 14 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d={openAddEditor ? 'M1 1L7 7L13 1' : 'M13 8L7 2L1 8'}
            stroke="currentColor"
            strokeWidth="1.5"
          ></path>
        </svg>
      </button>
      <Tooltip id="openEditor" />
    </div>
  );
};

export default EditorToolsTabs;
