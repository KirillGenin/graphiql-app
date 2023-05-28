import React, { FC } from 'react';
import styles from '../../GraphQLPage.module.scss';
import { TScalar } from './type';
import { useAppSelector } from '../../../../../app/hooks';
import ReturnButton from '../../../../common/ReturnButton';

const Int: FC<TScalar> = ({ callback, title }) => {
  const isVisible = useAppSelector((s) => s.docs.isIntLvl);

  return (
    <>
      {isVisible && (
        <>
          <ReturnButton title={title} onClick={callback} />
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
