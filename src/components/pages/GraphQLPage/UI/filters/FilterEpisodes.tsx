import React, { FC, useState } from 'react';
import { TScalar } from '../scalarTypes/type';
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';
import MainButton from '../../../../common/Button';
import { IconArrowLeft } from '@tabler/icons-react';
import Arg from '../parts/Arg';
import styles from '../../GraphQLPage.module.scss';
import String from '../scalarTypes/String';
import { toggleIsEpisodeFilter, toggleIsStringLvl } from '../../../../../app/slices/docsSlise';

const FilterEpisodes: FC<TScalar> = ({ callback, title }) => {
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector((s) => s.docs.isEpisodeFilter);
  const [string, setString] = useState(false);

  const routeString = (flag: 'goto' | 'goback') => {
    dispatch(toggleIsEpisodeFilter(flag === 'goback'));
    dispatch(toggleIsStringLvl(flag === 'goto'));
    setString((s) => !s);
  };

  return (
    <>
      {isVisible && (
        <div>
          <MainButton
            title={title}
            type="button"
            onClick={callback}
            rightIcon={<IconArrowLeft size={'1.2rem'} />}
          />
          <h4 className={styles.title}>Info</h4>

          <Arg name="name" type="String" callback={() => routeString('goto')} newLine={false} />
          <Arg name="status" type="String" callback={() => routeString('goto')} newLine={false} />
          <Arg name="species" type="String" callback={() => routeString('goto')} newLine={false} />
          <Arg name="type" type="String" callback={() => routeString('goto')} newLine={false} />
          <Arg name="gender" type="String" callback={() => routeString('goto')} newLine={false} />
        </div>
      )}
      {string && <String title="FilterEpisodes" callback={() => routeString('goback')} />}
    </>
  );
};

export default FilterEpisodes;
