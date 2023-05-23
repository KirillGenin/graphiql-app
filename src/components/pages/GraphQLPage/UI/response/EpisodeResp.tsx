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

const EpisodeResp: FC<TScalar> = ({ callback, title }) => {
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector((s) => s.docs.isEpisodeLvl);

  const goToId = () => {
    dispatch(toggleIsCharacterLvl(false));
    dispatch(toggleIsIdLvl(true));
  };

  const goToString = () => {
    dispatch(toggleIsLocationLvl(false));
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
          <h4 className={styles.title}>Episode</h4>

          <Arg name="id" type="ID" callback={goToId} newLine={false} />
          <p className={styles.title_text}>{`The id of the episode.`}</p>

          <Arg name="name" type="String" callback={goToString} newLine={false} />
          <p className={styles.title_text}>{`The name of the episode.`}</p>

          <Arg name="air_date" type="String" callback={goToString} newLine={false} />
          <p className={styles.title_text}>{`The air date of the episode.`}</p>

          <Arg name="episode" type="String" callback={goToString} newLine={false} />
          <p className={styles.title_text}>{`The code of the episode.`}</p>

          <Arg
            name="characters"
            type="Character"
            callback={goToString}
            list={true}
            listNonNull={true}
            newLine={false}
          />
          <p
            className={styles.title_text}
          >{`List of characters who have been seen in the episode.`}</p>

          <Arg name="created" type="String" list={true} newLine={false} callback={() => {}} />
          <p
            className={styles.title_text}
          >{`Time at which the episode was created in the database.`}</p>
        </div>
      )}
    </>
  );
};

export default EpisodeResp;
