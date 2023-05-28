import React from 'react';
import styles from '../../GraphQLPage.module.scss';
import Arg from '../parts/Arg';
import { useAppDispatch } from '../../../../../app/hooks';
import {
  toggleIsCharacterFilter,
  toggleIsCharactersLvl,
  toggleIsIntLvl,
  toggleIsQueryLvl,
  toggleIsQuerySubLvl,
} from '../../../../../app/slices/docsSlise';

const Characters = () => {
  const dispatch = useAppDispatch();

  const goToInt = () => {
    dispatch(toggleIsQueryLvl());
    dispatch(toggleIsQuerySubLvl(true));
    dispatch(toggleIsIntLvl(true));
  };

  const clickHandler = () => {
    dispatch(toggleIsQueryLvl());
    dispatch(toggleIsQuerySubLvl(false));
    dispatch(toggleIsCharactersLvl(true));
  };

  const goToFilterCharacter = () => {
    dispatch(toggleIsQueryLvl());
    dispatch(toggleIsCharacterFilter(true));
  };

  return (
    <>
      <div>
        <span>characters</span>
        <span>(</span>
        <Arg name="page" type="Int" callback={goToInt} />
        <Arg name="filter" type="FilterCharacter" callback={goToFilterCharacter} lastArg={true} />
        <span>&nbsp;):&nbsp;</span>
        <span className={styles.link} onClick={clickHandler}>
          Characters
        </span>
      </div>
      <p className={styles.title_text}>Get a list of characters selected by ids</p>
    </>
  );
};

export default Characters;
