import React, { FC } from 'react';
import styles from '../../GraphQLPage.module.scss';
import MainButton from '../../../../common/Button';
import { TScalar } from './type';
import { useAppSelector } from '../../../../../store/hooks';
import { IconArrowLeft } from '@tabler/icons-react';

const Id: FC<TScalar> = ({ callback, title }) => {
  const isIdLvl = useAppSelector((s) => s.docs.isIdLvl);

  return (
    <>
      {isIdLvl && (
        <>
          <MainButton
            title={title}
            type="button"
            onClick={callback}
            rightIcon={<IconArrowLeft size={'1.2rem'} />}
          />
          <h4 className={styles.title}>ID</h4>
          <p className={styles.title_text}>
            {`The ID scalar type represents a unique identifier, often used to refetch an
        object or as key for a cache. The ID type appears in a JSON response as a String; however,
        it is not intended to be human-readable. When expected as an input type, any string (such as
        "4") or integer (such as 4) input value will be accepted as an ID.`}
          </p>
        </>
      )}
    </>
  );
};

export default Id;
