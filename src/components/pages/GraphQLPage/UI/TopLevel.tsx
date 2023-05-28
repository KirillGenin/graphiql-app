import React from 'react';
import styles from '../GraphQLPage.module.scss';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { toggleIsTopLvl, toggleIsQueryLvl } from '../../../../app/slices/docsSlise';

const TopLevel = () => {
  const dispatch = useAppDispatch();
  const isTopLvl = useAppSelector((state) => state.docs.isTopLvl);

  const clickHandler = () => {
    dispatch(toggleIsTopLvl());
    dispatch(toggleIsQueryLvl());
  };

  return (
    <>
      {isTopLvl && (
        <>
          <h4 className={styles.title}>Docs</h4>
          <p className={styles.title_text}>
            A GraphQL schema provides a root type for each kind of operation.
          </p>
          <h5 className={styles.subtitle}>Root Types</h5>
          <div>
            <span>Query:&nbsp;</span>
            <span className={styles.link} onClick={clickHandler}>
              Query
            </span>
          </div>
        </>
      )}
    </>
  );
};

export default TopLevel;
