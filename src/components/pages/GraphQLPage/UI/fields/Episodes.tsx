import React from 'react';
import styles from '../../GraphQLPage.module.scss';
import Arg from '../parts/Arg';
import { useAppDispatch } from '../../../../../app/hooks';
import { toggleIsIntLvl, toggleIsQueryLvl } from '../../../../../app/slices/docsSlise';

const Episodes = () => {
  const dispatch = useAppDispatch();

  const goToInt = () => {
    dispatch(toggleIsQueryLvl());
    dispatch(toggleIsIntLvl(true));
  };

  const clickHandler = () => {
    dispatch(toggleIsQueryLvl());
  };

  return (
    <>
      <div>
        <span>episodes</span>
        <span>(&nbsp;</span>
        <Arg name="page" type="Int" callback={goToInt} />
        <Arg name="filter" type="FilterEpisodes" lastArg={true} />
        <span>&nbsp;):&nbsp;</span>
        <span className={styles.link} onClick={clickHandler}>
          Episodes
        </span>
      </div>
      <p className={styles.title_text}>Get the list of all episodes</p>
    </>
  );
};

export default Episodes;
