import React from 'react';
import styles from '../GraphQLPage.module.scss';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { toggleIsQueryLvl } from '../../../../store/slices/docsSlise';

const QueryLevel = () => {
  const dispatch = useAppDispatch();
  const isQueryLvl = useAppSelector((state) => state.docs.isQueryLvl);

  const clickHandler = () => {
    dispatch(toggleIsQueryLvl());
  };

  return (
    <>
      {isQueryLvl && (
        <>
          <h4 className={styles.title}>Docs</h4>
          <h5 className={styles.subtitle}>Fields</h5>
          <div>
            <span>charachter(</span>
            <span className={styles.link} onClick={clickHandler}>
              &nbsp;ID&nbsp;
            </span>
            <span>):&nbsp;</span>
            <span className={styles.link} onClick={clickHandler}>
              Character
            </span>
          </div>
        </>
      )}
    </>
  );
};

export default QueryLevel;
