import React, { FC } from 'react';
import styles from '../../GraphQLPage.module.scss';
import MainButton from '../../../../common/Button';
import { TScalar } from './type';

const Int: FC<TScalar> = ({ callback, title }) => {
  return (
    <>
      <MainButton title={title} type="button" onClick={callback} />
      <h4 className={styles.title}>Int</h4>
      <p className={styles.title_text}>
        {`The Int scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.`}
      </p>
    </>
  );
};

export default Int;
