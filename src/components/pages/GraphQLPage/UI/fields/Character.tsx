import React from 'react';
import styles from '../../GraphQLPage.module.scss';
import { useAppDispatch } from '../../../../../app/hooks';
import {
  toggleIsQueryLvl,
  toggleIsIdLvl,
  toggleIsCharacterLvl,
  toggleIsQuerySubLvl,
} from '../../../../../app/slices/docsSlise';
import Arg from '../parts/Arg';

const Character = () => {
  const dispatch = useAppDispatch();

  const goToId = (flag: 'goto' | 'goback') => {
    dispatch(toggleIsQueryLvl());
    dispatch(toggleIsQuerySubLvl(flag === 'goto'));
    dispatch(toggleIsIdLvl(flag === 'goto'));
  };

  const clickHandler = () => {
    dispatch(toggleIsQueryLvl());
    dispatch(toggleIsQuerySubLvl(false));
    dispatch(toggleIsCharacterLvl(true));
  };

  return (
    <>
      <>
        <div>
          <span>character</span>
          <span>(&nbsp;</span>
          <Arg name="id" type="ID" nonNull={true} lastArg={true} callback={() => goToId('goto')} />
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
