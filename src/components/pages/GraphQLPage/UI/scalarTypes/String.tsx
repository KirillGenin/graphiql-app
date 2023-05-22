import React, { FC } from 'react';
import styles from '../../GraphQLPage.module.scss';
import MainButton from '../../../../common/Button';
import { TScalar } from './type';

const String: FC<TScalar> = ({ callback, title }) => {
  return (
    <>
      <MainButton title={title} type="button" onClick={callback} />
      <h4 className={styles.title}>ID</h4>
      <p className={styles.title_text}>
        {`The String scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.`}
      </p>
    </>
  );
};

export default String;
