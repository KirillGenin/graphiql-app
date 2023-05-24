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
  toggleIsCharacterLvl,
  toggleIsCharactersLvl,
  toggleIsIdLvl,
  toggleIsIntLvl,
  toggleIsQueryLvl,
  toggleIsStringLvl,
  toggleIsTopLvl,
  toggleIsLocationLvl,
  toggleIsLocationsLvl,
  toggleIsEpisodeLvl,
  toggleIsEpisodesLvl,
} from '../../../../app/slices/docsSlise';
import CaracterResp from './response/CharacterResp';
import CaractersResp from './response/CharactersResp';
import LocationResp from './response/LocationResp';
import LocationsResp from './response/LocationsResp';
import EpisodeResp from './response/EpisodeResp';
import EpisodesResp from './response/EpisodesResp';

const QueryLevel = () => {
  const dispatch = useAppDispatch();
  const isQueryLvl = useAppSelector((state) => state.docs.isQueryLvl);

  const goToDocs = () => {
    dispatch(toggleIsTopLvl());
    dispatch(toggleIsQueryLvl());
  };

  const goToQueries = () => {
    dispatch(toggleIsQueryLvl());
    dispatch(toggleIsIdLvl(false));
    dispatch(toggleIsIntLvl(false));
    dispatch(toggleIsStringLvl(false));
    dispatch(toggleIsCharacterLvl(false));
    dispatch(toggleIsCharactersLvl(false));
    dispatch(toggleIsLocationLvl(false));
    dispatch(toggleIsLocationsLvl(false));
    dispatch(toggleIsEpisodeLvl(false));
    dispatch(toggleIsEpisodesLvl(false));
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

      <CaracterResp title="Fields" callback={goToQueries} />
      <CaractersResp title="Fields" callback={goToQueries} />
      <LocationResp title="Fields" callback={goToQueries} />
      <LocationsResp title="Fields" callback={goToQueries} />
      <EpisodeResp title="Fields" callback={goToQueries} />
      <EpisodesResp title="Fields" callback={goToQueries} />
    </>
  );
};

export default QueryLevel;
