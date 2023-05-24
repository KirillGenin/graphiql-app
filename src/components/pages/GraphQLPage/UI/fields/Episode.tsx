import React from 'react';
import styles from '../../GraphQLPage.module.scss';
import Arg from '../parts/Arg';
import { useAppDispatch } from '../../../../../app/hooks';
import {
  toggleIsEpisodeLvl,
  toggleIsIdLvl,
  toggleIsQueryLvl,
} from '../../../../../app/slices/docsSlise';

const Episode = () => {
  const dispatch = useAppDispatch();

  const goToId = () => {
    dispatch(toggleIsQueryLvl());
    dispatch(toggleIsIdLvl(true));
  };

  const clickHandler = () => {
    dispatch(toggleIsQueryLvl());
    dispatch(toggleIsEpisodeLvl(true));
  };

  return (
    <>
      <div>
        <span>episode</span>
        <span>(&nbsp;</span>
        <Arg name="id" type="ID" nonNull={true} lastArg={true} callback={goToId} />
        <span>&nbsp;):&nbsp;</span>
        <span className={styles.link} onClick={clickHandler}>
          Episode
        </span>
      </div>
      <p className={styles.title_text}>Get a specific episode by ID</p>
    </>
  );
};

export default Episode;
