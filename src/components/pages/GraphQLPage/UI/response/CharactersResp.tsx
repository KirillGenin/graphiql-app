import React, { FC, useState } from 'react';
import Arg from '../parts/Arg';
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';
import MainButton from '../../../../common/Button';
import { IconArrowLeft } from '@tabler/icons-react';
import { TScalar } from '../scalarTypes/type';
import styles from '../../GraphQLPage.module.scss';
import {
  toggleIsCharacterLvl,
  toggleIsCharactersLvl,
  toggleIsInfoLvl,
} from '../../../../../app/slices/docsSlise';
import Info from './Info';

const CaractersResp: FC<TScalar> = ({ callback, title }) => {
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector((s) => s.docs.isCharactersLvl);

  const [info, setInfo] = useState(false);

  const goToCharacter = () => {
    dispatch(toggleIsCharactersLvl(false));
    dispatch(toggleIsCharacterLvl(true));
  };

  const goToInfo = () => {
    dispatch(toggleIsCharactersLvl(false));
    dispatch(toggleIsInfoLvl(true));
    setInfo((s) => !s);
  };

  const backToCharacters = () => {
    dispatch(toggleIsCharactersLvl(true));
    dispatch(toggleIsInfoLvl(false));
    setInfo((s) => !s);
  };

  return (
    <>
      {isVisible && (
        <>
          <MainButton
            title={title}
            type="button"
            onClick={callback}
            rightIcon={<IconArrowLeft size={'1.2rem'} />}
          />
          <h4 className={styles.title}>Characters</h4>
          <div>
            <Arg name="info" type="Info" callback={goToInfo} newLine={false} lastArg={true} />
            <Arg
              name="results"
              type="Character"
              list={true}
              callback={goToCharacter}
              newLine={false}
            />
          </div>
        </>
      )}
      {info && <Info title="Characters" callback={backToCharacters} />}
    </>
  );
};

export default CaractersResp;
