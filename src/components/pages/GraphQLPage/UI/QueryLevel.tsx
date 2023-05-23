import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import Character from './fields/Character';
import Characters from './fields/Characters';
import СharactersByIds from './fields/CharactersByIds';
import styles from '../GraphQLPage.module.scss';
import Location from './fields/Location';
import Locations from './fields/Locations';
import LocationsByIds from './fields/LocationsByIds';
import Episode from './fields/Episode';
import Episodes from './fields/Episodes';
import EpisodesByIds from './fields/EpisodesByIds';
import MainButton from '../../../common/Button';
import { IconArrowLeft } from '@tabler/icons-react';
import {
  toggleIsIdLvl,
  toggleIsIntLvl,
  toggleIsQueryLvl,
  toggleIsTopLvl,
} from '../../../../app/slices/docsSlise';
import Id from './scalarTypes/Id';
import Int from './scalarTypes/Int';

const QueryLevel = () => {
  const dispatch = useAppDispatch();
  const isQueryLvl = useAppSelector((state) => state.docs.isQueryLvl);
  const isIdLvl = useAppSelector((state) => state.docs.isIdLvl);
  const isIntLvl = useAppSelector((state) => state.docs.isIntLvl);

  const goToDocs = () => {
    dispatch(toggleIsTopLvl());
    dispatch(toggleIsQueryLvl());
  };

  const goToQueries = () => {
    dispatch(toggleIsQueryLvl());
    dispatch(toggleIsIdLvl(false));
    dispatch(toggleIsIntLvl(false));
  };

  return (
    <>
      {isQueryLvl && (
        <>
          <div>
            <MainButton
              onClick={goToDocs}
              title="Docs"
              type="button"
              rightIcon={<IconArrowLeft size={'1.2rem'} />}
            />
          </div>
          <h4 className={styles.title} onClick={goToDocs}>
            Query
          </h4>
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
      {isIdLvl && <Id title="Fields" callback={goToQueries} />}
      {isIntLvl && <Int title="Fields" callback={goToQueries} />}
    </>
  );
};

export default QueryLevel;
