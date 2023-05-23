import React, { FC } from 'react';
import Arg from '../parts/Arg';
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';
import MainButton from '../../../../common/Button';
import { IconArrowLeft } from '@tabler/icons-react';
import { TScalar } from '../scalarTypes/type';
import styles from '../../GraphQLPage.module.scss';

const EpisodesResp: FC<TScalar> = ({ callback, title }) => {
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector((s) => s.docs.isEpisodesLvl);

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
          <h4 className={styles.title}>Episodes</h4>
          <div>
            <Arg name="info" type="Info" callback={() => {}} newLine={false} lastArg={true} />

            <Arg name="results" type="Episode" list={true} callback={() => {}} newLine={false} />
          </div>
        </>
      )}
    </>
  );
};

export default EpisodesResp;
