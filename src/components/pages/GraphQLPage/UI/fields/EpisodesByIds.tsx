import React from 'react';
import styles from '../../GraphQLPage.module.scss';
import Arg from '../parts/Arg';
import { useAppDispatch } from '../../../../../store/hooks';
import { toggleIsQueryLvl } from '../../../../../store/slices/docsSlise';

const EpisodesByIds = () => {
  const dispatch = useAppDispatch();

  const clickHandler = () => {
    dispatch(toggleIsQueryLvl());
  };

  return (
    <>
      <div>
        <span>episodesByIds</span>
        <span>(&nbsp;</span>
        <Arg name="ids" type="ID" nonNull={true} list={true} listNonNull={true} lastArg={true} />
        <span>&nbsp;):&nbsp;</span>
        <span className={styles.link} onClick={clickHandler}>
          [Episode]
        </span>
      </div>
      <p className={styles.title_text}>Get a list of episodes selected by ids</p>
    </>
  );
};

export default EpisodesByIds;
