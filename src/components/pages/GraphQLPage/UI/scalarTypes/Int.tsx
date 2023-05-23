import React, { FC } from 'react';
import styles from '../../GraphQLPage.module.scss';
import MainButton from '../../../../common/Button';
import { TScalar } from './type';
import { IconArrowLeft } from '@tabler/icons-react';
import { useAppSelector } from '../../../../../app/hooks';

const Int: FC<TScalar> = ({ callback, title }) => {
  const isVisible = useAppSelector((s) => s.docs.isIntLvl);

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
          <h4 className={styles.title}>Int</h4>
          <p className={styles.title_text}>
            {`The Int scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.`}
          </p>
        </>
      )}
    </>
  );
};

export default Int;
