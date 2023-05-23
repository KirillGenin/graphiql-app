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
  toggleIsStringLvl,
} from '../../../../../app/slices/docsSlise';

const CaracterResp: FC<TScalar> = ({ callback, title }) => {
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector((s) => s.docs.isCharacterLvl);

  const goToId = () => {
    dispatch(toggleIsCharacterLvl(false));
    dispatch(toggleIsIdLvl(true));
  };

  const goToString = () => {
    dispatch(toggleIsCharacterLvl(false));
    dispatch(toggleIsStringLvl(true));
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
          <h4 className={styles.title}>Character</h4>
          <Arg name="id" type="ID" callback={goToId} newLine={false} />
          <p className={styles.title_text}>{`The id of the character.`}</p>

          <Arg name="name" type="String" callback={goToString} newLine={false} />
          <p className={styles.title_text}>{`The name of the character.`}</p>

          <Arg name="status" type="String" callback={goToString} newLine={false} />
          <p
            className={styles.title_text}
          >{`The status of the character ('Alive', 'Dead' or 'unknown').`}</p>

          <Arg name="species" type="String" callback={goToString} newLine={false} />
          <p className={styles.title_text}>{`The species of the character.`}</p>

          <Arg name="type" type="String" callback={goToString} newLine={false} />
          <p className={styles.title_text}>{`The type or subspecies of the character.`}</p>

          <Arg name="gender" type="String" callback={goToString} newLine={false} />
          <p
            className={styles.title_text}
          >{`The gender of the character ('Female', 'Male', 'Genderless' or 'unknown').`}</p>

          <Arg name="origin" type="Location" newLine={false} />
          <p className={styles.title_text}>{`The character's origin location`}</p>

          <Arg name="location" type="Location" newLine={false} />
          <p className={styles.title_text}>{`The character's last known location`}</p>

          <Arg name="image" type="String" callback={goToString} newLine={false} />
          <p className={styles.title_text}>{`Link to the character's image.
All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.`}</p>

          <Arg name="episode" type="Episode" newLine={false} />
          <p className={styles.title_text}>{`Episodes in which this character appeared.`}</p>

          <Arg name="created" type="String" callback={goToString} newLine={false} />
          <p
            className={styles.title_text}
          >{`Time at which the character was created in the database.`}</p>
        </div>
      )}
    </>
  );
};

export default CaracterResp;
