import React from 'react';
import styles from '../../GraphQLPage.module.scss';
import Arg from '../parts/Arg';
import { toggleIsQueryLvl, toggleIsIdLvl } from '../../../../../store/slices/docsSlise';
import { useAppDispatch } from '../../../../../store/hooks';

const LocationsByIds = () => {
  const dispatch = useAppDispatch();

  const goToId = () => {
    dispatch(toggleIsQueryLvl());
    dispatch(toggleIsIdLvl(true));
  };

  const clickHandler = () => {};

  return (
    <>
      <div>
        <span>locationsByIds</span>
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
        <span>&nbsp;):&nbsp;</span>
        <span className={styles.link} onClick={clickHandler}>
          [Location]
        </span>
      </div>
      <p className={styles.title_text}>Get a list of characters selected by ids</p>
    </>
  );
};

export default LocationsByIds;
