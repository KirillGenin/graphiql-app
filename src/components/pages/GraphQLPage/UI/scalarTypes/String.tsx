import React, { FC } from 'react';
import styles from '../../GraphQLPage.module.scss';
import { TScalar } from './type';
import { useAppSelector } from '../../../../../app/hooks';
import ReturnButton from '../../../../common/ReturnButton';

const String: FC<TScalar> = ({ callback, title }) => {
  const isVisible = useAppSelector((s) => s.docs.isStringLvl);

  return (
    <>
      {isVisible && (
        <>
          <ReturnButton title={title} onClick={callback} />
          <h4 className={styles.title}>String</h4>
          <p className={styles.title_text}>
            {`The String scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.`}
          </p>
        </>
      )}
    </>
  );
};

export default String;
