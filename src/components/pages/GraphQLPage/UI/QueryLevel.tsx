import React from 'react';
import { useAppSelector } from '../../../../store/hooks';
import Character from './fields/Character';
import Characters from './fields/Characters';
import СharactersByIds from './fields/СharactersByIds';
import styles from '../GraphQLPage.module.scss';
import Location from './fields/Location';
import Locations from './fields/Locations';
import LocationsByIds from './fields/LocationsByIds';
import Episode from './fields/Episode';
import Episodes from './fields/Episodes';
import EpisodesByIds from './fields/EpisodesByIds';

const QueryLevel = () => {
  const isQueryLvl = useAppSelector((state) => state.docs.isQueryLvl);

  return (
    <>
      {isQueryLvl && (
        <>
          <h4 className={styles.title}>Docs</h4>
          <h5 className={styles.subtitle}>Fields</h5>
          <Character />
          <Characters />
          <СharactersByIds />
          <Location />
          <Locations />
          <LocationsByIds />
          <Episode />
          <Episodes />
          <EpisodesByIds />
        </>
      )}
    </>
  );
};

export default QueryLevel;
