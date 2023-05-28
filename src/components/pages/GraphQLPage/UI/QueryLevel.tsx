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
  toggleIsCharacterFilter,
  toggleIsLocationFilter,
  toggleIsEpisodeFilter,
} from '../../../../app/slices/docsSlise';
import CharacterResp from './response/CharacterResp';
import CaractersResp from './response/CharactersResp';
import LocationResp from './response/LocationResp';
import LocationsResp from './response/LocationsResp';
import EpisodeResp from './response/EpisodeResp';
import EpisodesResp from './response/EpisodesResp';
import Id from './scalarTypes/Id';
import Int from './scalarTypes/Int';
import FilterEpisodes from './filters/FilterEpisodes';
import FilterCharacter from './filters/FilterCharacter';
import FilterLocation from './filters/FilterLocation';
import ReturnButton from '../../../common/ReturnButton';

const QueryLevel = () => {
  const dispatch = useAppDispatch();
  const isQueryLvl = useAppSelector((state) => state.docs.isQueryLvl);
  const isQuerySubLvl = useAppSelector((state) => state.docs.isQuerySubLvl);

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
    dispatch(toggleIsCharacterFilter(false));
    dispatch(toggleIsLocationFilter(false));
    dispatch(toggleIsEpisodeFilter(false));
  };

  return (
    <>
      {isQueryLvl && (
        <>
          <div>
            <ReturnButton onClick={goToDocs} title="Docs" />
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

      {isQuerySubLvl && <Id title="Fields" callback={goToQueries} />}
      {isQuerySubLvl && <Int title="Fields" callback={goToQueries} />}
      <CharacterResp title="Fields" callback={goToQueries} />
      <CaractersResp title="Fields" callback={goToQueries} />
      <LocationResp title="Fields" callback={goToQueries} />
      <LocationsResp title="Fields" callback={goToQueries} />
      <EpisodeResp title="Fields" callback={goToQueries} />
      <EpisodesResp title="Fields" callback={goToQueries} />
      <FilterCharacter title="Fields" callback={goToQueries} />
      <FilterLocation title="Fields" callback={goToQueries} />
      <FilterEpisodes title="Fields" callback={goToQueries} />
    </>
  );
};

export default QueryLevel;
