import React, { FC, useState } from 'react';
import { TScalar } from '../scalarTypes/type';
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';
import Arg from '../parts/Arg';
import styles from '../../GraphQLPage.module.scss';
import String from '../scalarTypes/String';
import { toggleIsLocationFilter, toggleIsStringLvl } from '../../../../../app/slices/docsSlise';
import ReturnButton from '../../../../common/ReturnButton';

const FilterLocation: FC<TScalar> = ({ callback, title }) => {
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector((s) => s.docs.isLocationFilter);
  const [string, setString] = useState(false);

  const routeString = (flag: 'goto' | 'goback') => {
    dispatch(toggleIsLocationFilter(flag === 'goback'));
    dispatch(toggleIsStringLvl(flag === 'goto'));
    setString((s) => !s);
  };

  return (
    <>
      {isVisible && (
        <>
          <ReturnButton title={title} onClick={callback} />
          <h4 className={styles.title}>Filter Location</h4>
          <Arg name="name" type="String" callback={() => routeString('goto')} />
          <Arg name="type" type="String" callback={() => routeString('goto')} />
          <Arg name="dimension" type="String" callback={() => routeString('goto')} />
        </>
      )}
      {string && <String title="Filter" callback={() => routeString('goback')} />}
    </>
  );
};

export default FilterLocation;
