import React from 'react';
import styles from '../../GraphQLPage.module.scss';
import Arg from '../parts/Arg';
import { useAppDispatch } from '../../../../../store/hooks';
import { toggleIsQueryLvl } from '../../../../../store/slices/docsSlise';

const Characters = () => {
  const dispatch = useAppDispatch();

  const clickHandler = () => {
    dispatch(toggleIsQueryLvl());
  };

  return (
    <>
      <div>
        <span>charachters</span>
        <span>(</span>
        <Arg name="page" type="Int" nonNull={true} />
        <Arg name="filter" type="FilterCharacter" lastArg={true} />
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
