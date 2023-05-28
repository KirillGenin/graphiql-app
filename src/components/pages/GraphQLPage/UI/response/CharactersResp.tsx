import React, { FC, useState } from 'react';
import Arg from '../parts/Arg';
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';
import { TScalar } from '../scalarTypes/type';
import styles from '../../GraphQLPage.module.scss';
import {
  toggleIsCharacterLvl,
  toggleIsCharactersLvl,
  toggleIsInfoLvl,
} from '../../../../../app/slices/docsSlise';
import Info from './Info';
import ReturnButton from '../../../../common/ReturnButton';

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
          <ReturnButton title={title} onClick={callback} />
          <h4 className={styles.title}>Characters</h4>
          <div>
            <Arg name="info" type="Info" callback={goToInfo} lastArg={true} />
            <Arg name="results" type="Character" list={true} callback={goToCharacter} />
          </div>
        </>
      )}
      {info && <Info title="Characters" callback={backToCharacters} />}
    </>
  );
};

export default CaractersResp;
