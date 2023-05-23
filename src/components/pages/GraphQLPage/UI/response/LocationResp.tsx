import React, { FC } from 'react';
import Arg from '../parts/Arg';
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';
import MainButton from '../../../../common/Button';
import { IconArrowLeft } from '@tabler/icons-react';
import { TScalar } from '../scalarTypes/type';
import styles from '../../GraphQLPage.module.scss';
import {
  toggleIsCharacterLvl,
  toggleIsIdLvl,
  toggleIsLocationLvl,
  toggleIsStringLvl,
} from '../../../../../app/slices/docsSlise';

const LocationResp: FC<TScalar> = ({ callback, title }) => {
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector((s) => s.docs.isLocationLvl);

  const goToId = () => {
    dispatch(toggleIsCharacterLvl(false));
    dispatch(toggleIsIdLvl(true));
  };

  const goToString = () => {
    dispatch(toggleIsLocationLvl(false));
    dispatch(toggleIsStringLvl(true));
  };

  const goToCharacter = () => {
    dispatch(toggleIsLocationLvl(false));
    dispatch(toggleIsCharacterLvl(true));
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
          <h4 className={styles.title}>Location</h4>

          <Arg name="id" type="ID" callback={goToId} newLine={false} />
          <p className={styles.title_text}>{`The id of the location.`}</p>

          <Arg name="name" type="String" callback={goToString} newLine={false} />
          <p className={styles.title_text}>{`The name of the location.`}</p>

          <Arg name="type" type="String" callback={goToString} newLine={false} />
          <p className={styles.title_text}>{`The type of the location.`}</p>

          <Arg name="dimension" type="String" callback={goToString} newLine={false} />
          <p className={styles.title_text}>{`The dimension in which the location is located.`}</p>

          <Arg
            name="residents"
            type="Character"
            callback={goToCharacter}
            list={true}
            listNonNull={true}
            newLine={false}
          />
          <p
            className={styles.title_text}
          >{`List of characters who have been last seen in the location.`}</p>

          <Arg name="created" type="String" newLine={false} callback={goToString} />
          <p
            className={styles.title_text}
          >{`Time at which the location was created in the database.`}</p>
        </div>
      )}
    </>
  );
};

export default LocationResp;
