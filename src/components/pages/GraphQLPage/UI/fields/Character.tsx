import React from 'react';
import styles from '../../GraphQLPage.module.scss';
import { useAppDispatch } from '../../../../../store/hooks';
import { toggleIsQueryLvl, toggleIsIdLvl } from '../../../../../store/slices/docsSlise';
import Arg from '../parts/Arg';

const Character = () => {
  const dispatch = useAppDispatch();

  const goToId = () => {
    dispatch(toggleIsQueryLvl());
    dispatch(toggleIsIdLvl());
  };

  const clickHandler = () => {
    dispatch(toggleIsQueryLvl());
  };

  return (
    <>
      <>
        <div>
          <span>charachter</span>
          <span>(&nbsp;</span>
          <Arg name="id" type="ID" nonNull={true} lastArg={true} callback={goToId} />
          <span>&nbsp;):&nbsp;</span>
          <span className={styles.link} onClick={clickHandler}>
            Character
          </span>
        </div>
        <p className={styles.title_text}>Get a specific character by ID</p>
      </>
    </>
  );
};

export default Character;
