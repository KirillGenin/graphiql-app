import React from 'react';
import styles from '../../GraphQLPage.module.scss';
import Arg from '../parts/Arg';
import {
  toggleIsQueryLvl,
  toggleIsIdLvl,
  toggleIsLocationLvl,
} from '../../../../../app/slices/docsSlise';
import { useAppDispatch } from '../../../../../app/hooks';

const Location = () => {
  const dispatch = useAppDispatch();

  const goToId = () => {
    dispatch(toggleIsQueryLvl());
    dispatch(toggleIsIdLvl(true));
  };

  const clickHandler = () => {
    dispatch(toggleIsQueryLvl());
    dispatch(toggleIsLocationLvl(true));
  };

  return (
    <>
      <div>
        <span>location</span>
        <span>(&nbsp;</span>
        <Arg name="id" type="ID" nonNull={true} lastArg={true} callback={goToId} />
        <span>&nbsp;):&nbsp;</span>
        <span className={styles.link} onClick={clickHandler}>
          Location
        </span>
      </div>
      <p className={styles.title_text}>Get a specific locations by ID</p>
    </>
  );
};

export default Location;
