import React, { useState, useEffect } from 'react';
import styles from '../GraphQLPage.module.scss';
import DocumentationItem from './DocumentationItem';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { Center, Loader } from '@mantine/core';
import { IconBook2 } from '@tabler/icons-react';
import { URL, fetchSchema } from '../../../../app/slices/docsSlise';

const Documentation = () => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const isLoading = useAppSelector((s) => s.docs.isLoading);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSchema(URL));
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      setVisible(window.innerWidth > 780);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  });

  return (
    <aside className={isVisible ? styles.documentation : styles.hidden}>
      <div className={styles.button} onClick={() => setVisible((s) => !s)}>
        <IconBook2 />
      </div>
      {isLoading ? (
        <Center m={'1.5rem 0 0 0'}>
          <Loader color="black" />
        </Center>
      ) : (
        <DocumentationItem visible={isVisible} />
      )}
    </aside>
  );
};

export default Documentation;
