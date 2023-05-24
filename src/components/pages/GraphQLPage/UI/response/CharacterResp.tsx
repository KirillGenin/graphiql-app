import React, { FC, useState } from 'react';
import Arg from '../parts/Arg';
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';
import MainButton from '../../../../common/Button';
import { IconArrowLeft } from '@tabler/icons-react';
import { TScalar } from '../scalarTypes/type';
import styles from '../../GraphQLPage.module.scss';
import {
  toggleIsCharacterLvl,
  toggleIsEpisodeLvl,
  toggleIsIdLvl,
  toggleIsLocationLvl,
  toggleIsStringLvl,
} from '../../../../../app/slices/docsSlise';
import String from '../scalarTypes/String';
import Id from '../scalarTypes/Id';

const CharacterResp: FC<TScalar> = ({ callback, title }) => {
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector((s) => s.docs.isCharacterLvl);
  const [id, setId] = useState(false);
  const [string, setString] = useState(false);

  const goToId = (flag: 'goto' | 'goback') => {
    dispatch(toggleIsCharacterLvl(flag === 'goback'));
    dispatch(toggleIsIdLvl(flag === 'goto'));
    setId((s) => !s);
  };

  const goToString = (flag: 'goto' | 'goback') => {
    dispatch(toggleIsCharacterLvl(flag === 'goback'));
    dispatch(toggleIsStringLvl(flag === 'goto'));
    setString((s) => !s);
  };

  const goToLocation = () => {
    dispatch(toggleIsCharacterLvl(false));
    dispatch(toggleIsLocationLvl(true));
  };

  const goToEpisode = () => {
    dispatch(toggleIsCharacterLvl(false));
    dispatch(toggleIsEpisodeLvl(true));
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

          <Arg name="id" type="ID" callback={() => goToId('goto')} />
          <p className={styles.title_text}>{`The id of the character.`}</p>

          <Arg name="name" type="String" callback={() => goToString('goto')} />
          <p className={styles.title_text}>{`The name of the character.`}</p>

          <Arg name="status" type="String" callback={() => goToString('goto')} />
          <p
            className={styles.title_text}
          >{`The status of the character ('Alive', 'Dead' or 'unknown').`}</p>

          <Arg name="species" type="String" callback={() => goToString('goto')} />
          <p className={styles.title_text}>{`The species of the character.`}</p>

          <Arg name="type" type="String" callback={() => goToString('goto')} />
          <p className={styles.title_text}>{`The type or subspecies of the character.`}</p>

          <Arg name="gender" type="String" callback={() => goToString('goto')} />
          <p
            className={styles.title_text}
          >{`The gender of the character ('Female', 'Male', 'Genderless' or 'unknown').`}</p>

          <Arg name="origin" type="Location" callback={goToLocation} />
          <p className={styles.title_text}>{`The character's origin location`}</p>

          <Arg name="location" type="Location" callback={goToLocation} />
          <p className={styles.title_text}>{`The character's last known location`}</p>

          <Arg name="image" type="String" callback={() => goToString('goto')} />
          <p className={styles.title_text}>{`Link to the character's image.
All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.`}</p>

          <Arg
            name="episode"
            type="Episode"
            list={true}
            listNonNull={true}
            callback={goToEpisode}
          />
          <p className={styles.title_text}>{`Episodes in which this character appeared.`}</p>

          <Arg name="created" type="String" callback={() => goToString('goto')} />
          <p
            className={styles.title_text}
          >{`Time at which the character was created in the database.`}</p>
        </div>
      )}
      {id && <Id title="Character" callback={() => goToId('goback')} />}
      {string && <String title="Character" callback={() => goToString('goback')} />}
    </>
  );
};

export default CharacterResp;
