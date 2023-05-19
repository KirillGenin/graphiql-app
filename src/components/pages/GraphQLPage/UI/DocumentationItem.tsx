import React from 'react';
import styles from '../GraphQLPage.module.scss';
import { useAppDispatch } from '../../../../store/hooks';
import { toggleIsQuery } from '../../../../store/slices/docsSlise';

const DocumentationItem = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <h5 className={styles.title}>Root Types</h5>
      <div>
        <span className={styles.subtitle}>Query:</span>
        <span>&nbsp;</span>
        <span className={styles.link} onClick={() => dispatch(toggleIsQuery())}>
          Query
        </span>
      </div>
    </>
  );
};

export default DocumentationItem;
