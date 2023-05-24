import React, { FC, useState } from 'react';
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
import Id from '../scalarTypes/Id';
import String from '../scalarTypes/String';

const LocationResp: FC<TScalar> = ({ callback, title }) => {
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector((s) => s.docs.isLocationLvl);
  const [id, setId] = useState(false);
  const [string, setString] = useState(false);

  const goToId = (flag: 'goto' | 'goback') => {
    dispatch(toggleIsLocationLvl(flag === 'goback'));
    dispatch(toggleIsIdLvl(flag === 'goto'));
    setId((s) => !s);
  };

  const goToString = (flag: 'goto' | 'goback') => {
    dispatch(toggleIsLocationLvl(flag === 'goback'));
    dispatch(toggleIsStringLvl(flag === 'goto'));
    setString((s) => !s);
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

          <Arg name="id" type="ID" callback={() => goToId('goto')} newLine={false} />
          <p className={styles.title_text}>{`The id of the location.`}</p>

          <Arg name="name" type="String" callback={() => goToString('goto')} newLine={false} />
          <p className={styles.title_text}>{`The name of the location.`}</p>

          <Arg name="type" type="String" callback={() => goToString('goto')} newLine={false} />
          <p className={styles.title_text}>{`The type of the location.`}</p>

          <Arg name="dimension" type="String" callback={() => goToString('goto')} newLine={false} />
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

          <Arg name="created" type="String" newLine={false} callback={() => goToString('goto')} />
          <p
            className={styles.title_text}
          >{`Time at which the location was created in the database.`}</p>
        </div>
      )}
      {id && <Id title="Location" callback={() => goToId('goback')} />}
      {string && <String title="Location" callback={() => goToString('goback')} />}
    </>
  );
};

export default LocationResp;
