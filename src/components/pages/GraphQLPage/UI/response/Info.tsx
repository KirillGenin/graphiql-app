import React, { FC } from 'react';
import MainButton from '../../../../common/Button';
import { IconArrowLeft } from '@tabler/icons-react';
import { TScalar } from '../scalarTypes/type';
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';
import styles from '../../GraphQLPage.module.scss';
import Arg from '../parts/Arg';
import Int from '../scalarTypes/Int';
import { toggleIsInfoLvl, toggleIsIntLvl } from '../../../../../app/slices/docsSlise';

const Info: FC<TScalar> = ({ callback, title }) => {
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector((s) => s.docs.isInfoLvl);

  const setInfoLink = (flag: 'goto' | 'goback') => {
    dispatch(toggleIsInfoLvl(flag === 'goback'));
    dispatch(toggleIsIntLvl(flag === 'goto'));
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

          <Arg name="count" type="Int" callback={() => setInfoLink('goto')} newLine={false} />
          <p className={styles.title_text}>{`The length of the response.`}</p>

          <Arg name="pages" type="Int" callback={() => setInfoLink('goto')} newLine={false} />
          <p className={styles.title_text}>{`The amount of pages.`}</p>

          <Arg name="next" type="Int" callback={() => setInfoLink('goto')} newLine={false} />
          <p className={styles.title_text}>{`Number of the next page (if it exists)`}</p>

          <Arg name="prev" type="Int" callback={() => setInfoLink('goto')} newLine={false} />
          <p className={styles.title_text}>{`Number of the previous page (if it exists)`}</p>
        </div>
      )}
      <Int title="Info" callback={() => setInfoLink('goback')} />
    </>
  );
};

export default Info;
