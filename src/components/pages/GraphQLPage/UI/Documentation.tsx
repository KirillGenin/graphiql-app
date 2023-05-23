import React from 'react';
import styles from '../GraphQLPage.module.scss';
import DocumentationItem from './DocumentationItem';

const Documentation = () => {
  return (
    <aside className={styles.documentation}>
      <DocumentationItem />
    </aside>
  );
};

export default Documentation;
