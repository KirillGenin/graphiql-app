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
        <>
          <MainButton
            title={title}
            type="button"
            onClick={callback}
            rightIcon={<IconArrowLeft size={'1.2rem'} />}
          />
          <h4 className={styles.title}>Filter Episode</h4>
          <Arg name="name" type="String" callback={() => routeString('goto')} />
          <Arg name="episode" type="String" callback={() => routeString('goto')} />
        </>
      )}
      {string && <String title="Filter" callback={() => routeString('goback')} />}
    </>
  );
};

export default FilterEpisodes;
