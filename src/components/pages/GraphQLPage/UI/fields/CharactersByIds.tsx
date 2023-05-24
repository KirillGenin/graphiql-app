import React from 'react';
import styles from '../../GraphQLPage.module.scss';
import Arg from '../parts/Arg';
import { useAppDispatch } from '../../../../../app/hooks';
import {
  toggleIsQueryLvl,
  toggleIsIdLvl,
  toggleIsCharacterLvl,
} from '../../../../../app/slices/docsSlise';

const СharactersByIds = () => {
  const dispatch = useAppDispatch();

  const goToId = () => {
    dispatch(toggleIsQueryLvl());
    dispatch(toggleIsIdLvl(true));
  };

  const clickHandler = () => {
    dispatch(toggleIsQueryLvl());
    dispatch(toggleIsCharacterLvl(true));
  };

  return (
    <>
      <div>
        <span>charactersByIds</span>
        <span>(&nbsp;</span>
        <Arg
          name="ids"
          type="ID"
          nonNull={true}
          list={true}
          listNonNull={true}
          lastArg={true}
          callback={goToId}
        />
        <span>&nbsp;):&nbsp;[</span>
        <span className={styles.link} onClick={clickHandler}>
          Character
        </span>
        <span>]</span>
      </div>
      <p className={styles.title_text}>Get a list of characters selected by ids</p>
    </>
  );
};

export default СharactersByIds;
