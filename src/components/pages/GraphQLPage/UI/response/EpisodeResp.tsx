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
  toggleIsStringLvl,
} from '../../../../../app/slices/docsSlise';
import Id from '../scalarTypes/Id';
import String from '../scalarTypes/String';

const EpisodeResp: FC<TScalar> = ({ callback, title }) => {
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector((s) => s.docs.isEpisodeLvl);
  const [id, setId] = useState(false);
  const [string, setString] = useState(false);

  const goToId = (flag: 'goto' | 'goback') => {
    dispatch(toggleIsEpisodeLvl(flag === 'goback'));
    dispatch(toggleIsIdLvl(flag === 'goto'));
    setId((s) => !s);
  };

  const goToString = (flag: 'goto' | 'goback') => {
    dispatch(toggleIsEpisodeLvl(flag === 'goback'));
    dispatch(toggleIsStringLvl(flag === 'goto'));
    setString((s) => !s);
  };

  const goToCharacter = () => {
    dispatch(toggleIsEpisodeLvl(false));
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
          <h4 className={styles.title}>Episode</h4>

          <Arg name="id" type="ID" callback={() => goToId('goto')} newLine={false} />
          <p className={styles.title_text}>{`The id of the episode.`}</p>

          <Arg name="name" type="String" callback={() => goToString('goto')} newLine={false} />
          <p className={styles.title_text}>{`The name of the episode.`}</p>

          <Arg name="air_date" type="String" callback={() => goToString('goto')} newLine={false} />
          <p className={styles.title_text}>{`The air date of the episode.`}</p>

          <Arg name="episode" type="String" callback={() => goToString('goto')} newLine={false} />
          <p className={styles.title_text}>{`The code of the episode.`}</p>

          <Arg
            name="characters"
            type="Character"
            callback={goToCharacter}
            list={true}
            listNonNull={true}
            newLine={false}
          />
          <p
            className={styles.title_text}
          >{`List of characters who have been seen in the episode.`}</p>

          <Arg name="created" type="String" newLine={false} callback={() => goToString('goto')} />
          <p
            className={styles.title_text}
          >{`Time at which the episode was created in the database.`}</p>
        </div>
      )}
      {id && <Id title="Episode" callback={() => goToId('goback')} />}
      {string && <String title="Episode" callback={() => goToString('goback')} />}
    </>
  );
};

export default EpisodeResp;
