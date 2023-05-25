import React, { FC, useState } from 'react';
import Arg from '../parts/Arg';
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';
import { TScalar } from '../scalarTypes/type';
import styles from '../../GraphQLPage.module.scss';
import {
  toggleIsEpisodeLvl,
  toggleIsEpisodesLvl,
  toggleIsInfoLvl,
} from '../../../../../app/slices/docsSlise';
import Info from './Info';
import ReturnButton from '../../../../common/ReturnButton';

const EpisodesResp: FC<TScalar> = ({ callback, title }) => {
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector((s) => s.docs.isEpisodesLvl);

  const [info, setInfo] = useState(false);

  const goToEpisode = () => {
    dispatch(toggleIsEpisodesLvl(false));
    dispatch(toggleIsEpisodeLvl(true));
  };

  const goToInfo = () => {
    dispatch(toggleIsEpisodesLvl(false));
    dispatch(toggleIsInfoLvl(true));
    setInfo((s) => !s);
  };

  const backToEpisodes = () => {
    dispatch(toggleIsEpisodesLvl(true));
    dispatch(toggleIsInfoLvl(false));
    setInfo((s) => !s);
  };

  return (
    <>
      {isVisible && (
        <>
          <ReturnButton title={title} onClick={callback} />
          <h4 className={styles.title}>Episodes</h4>
          <div>
            <Arg name="info" type="Info" callback={goToInfo} lastArg={true} />

            <Arg name="results" type="Episode" list={true} callback={goToEpisode} />
          </div>
        </>
      )}
      {info && <Info title="Episodes" callback={backToEpisodes} />}
    </>
  );
};

export default EpisodesResp;
