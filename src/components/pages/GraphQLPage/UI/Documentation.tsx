import React from 'react';
import styles from '../GraphQLPage.module.scss';
import DocumentationItem from './DocumentationItem';
import { useAppSelector } from '../../../../app/hooks';
import { Center, Loader } from '@mantine/core';

const Documentation = () => {
  const isLoading = useAppSelector((s) => s.docs.isLoading);

  return (
    <aside className={styles.documentation}>
      {isLoading ? (
        <Center m={'1rem 0 0 0'}>
          <Loader color="black" />
        </Center>
      ) : (
        <DocumentationItem />
      )}
    </aside>
  );
};

export default Documentation;
