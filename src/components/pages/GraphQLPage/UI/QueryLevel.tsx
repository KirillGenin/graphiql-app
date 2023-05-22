import React from 'react';
import { useAppSelector } from '../../../../store/hooks';
import CharacterField from './fields/CharacterField';
import CharactersField from './fields/CharactersField';
import styles from '../GraphQLPage.module.scss';

const QueryLevel = () => {
  const isQueryLvl = useAppSelector((state) => state.docs.isQueryLvl);

  return (
    <>
      {isQueryLvl && (
        <>
          <h4 className={styles.title}>Docs</h4>
          <h5 className={styles.subtitle}>Fields</h5>
          <CharacterField />
          <CharactersField />
        </>
      )}
    </>
  );
};

export default QueryLevel;
