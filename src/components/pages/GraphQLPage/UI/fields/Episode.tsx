import React from 'react';
import styles from '../../GraphQLPage.module.scss';
import Arg from '../parts/Arg';
import { useAppDispatch } from '../../../../../store/hooks';
import { toggleIsQueryLvl } from '../../../../../store/slices/docsSlise';

const Episode = () => {
  const dispatch = useAppDispatch();

  const clickHandler = () => {
    dispatch(toggleIsQueryLvl());
  };

  return (
    <>
      <div>
        <span>episode</span>
        <span>(&nbsp;</span>
        <Arg name="id" type="ID" nonNull={true} lastArg={true} />
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
