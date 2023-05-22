import React from 'react';
import styles from '../../GraphQLPage.module.scss';
import Arg from '../parts/Arg';
import { useAppDispatch } from '../../../../../store/hooks';

const СharactersByIds = () => {
  const dispatch = useAppDispatch();

  const clickHandler = () => {};

  return (
    <>
      <div>
        <span>charactersByIds</span>
        <span>(&nbsp;</span>
        <Arg name="ids" type="ID" nonNull={true} list={true} listNonNull={true} lastArg={true} />
        <span>&nbsp;):&nbsp;</span>
        <span className={styles.link} onClick={clickHandler}>
          [Character]
        </span>
      </div>
      <p className={styles.title_text}>Get a list of characters selected by ids</p>
    </>
  );
};

export default СharactersByIds;
