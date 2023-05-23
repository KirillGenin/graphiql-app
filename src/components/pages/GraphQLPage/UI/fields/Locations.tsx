import React from 'react';
import styles from '../../GraphQLPage.module.scss';
import Arg from '../parts/Arg';
import { useAppDispatch } from '../../../../../store/hooks';
import { toggleIsIntLvl, toggleIsQueryLvl } from '../../../../../store/slices/docsSlise';

const Locations = () => {
  const dispatch = useAppDispatch();

  const goToInt = () => {
    dispatch(toggleIsQueryLvl());
    dispatch(toggleIsIntLvl(true));
  };

  const clickHandler = () => {};

  return (
    <>
      <div>
        <span>locations</span>
        <span>(&nbsp;</span>
        <Arg name="page" type="Int" />
        <Arg name="filter" type="FilterLocation" lastArg={true} callback={goToInt} />
        <span>&nbsp;):&nbsp;</span>
        <span className={styles.link} onClick={clickHandler}>
          Locations
        </span>
      </div>
      <p className={styles.title_text}>Get the list of all locations</p>
    </>
  );
};

export default Locations;
