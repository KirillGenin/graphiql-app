import React, { FC, useState } from 'react';
import { TScalar } from '../scalarTypes/type';
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';
import Arg from '../parts/Arg';
import styles from '../../GraphQLPage.module.scss';
import String from '../scalarTypes/String';
import { toggleIsCharacterFilter, toggleIsStringLvl } from '../../../../../app/slices/docsSlise';
import ReturnButton from '../../../../common/ReturnButton';

const FilterCharacter: FC<TScalar> = ({ callback, title }) => {
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector((s) => s.docs.isCharacterFilter);
  const [string, setString] = useState(false);

  const routeString = (flag: 'goto' | 'goback') => {
    dispatch(toggleIsCharacterFilter(flag === 'goback'));
    dispatch(toggleIsStringLvl(flag === 'goto'));
    setString((s) => !s);
  };

  return (
    <>
      {isVisible && (
        <>
          <ReturnButton title={title} onClick={callback} />
          <h4 className={styles.title}>Filter Character</h4>
          <Arg name="name" type="String" callback={() => routeString('goto')} />
          <Arg name="status" type="String" callback={() => routeString('goto')} />
          <Arg name="species" type="String" callback={() => routeString('goto')} />
          <Arg name="type" type="String" callback={() => routeString('goto')} />
          <Arg name="gender" type="String" callback={() => routeString('goto')} />
        </>
      )}
      {string && <String title="Filter" callback={() => routeString('goback')} />}
    </>
  );
};

export default FilterCharacter;
