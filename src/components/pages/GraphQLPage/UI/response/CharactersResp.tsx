import React, { FC } from 'react';
import Arg from '../parts/Arg';
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';
import MainButton from '../../../../common/Button';
import { IconArrowLeft } from '@tabler/icons-react';
import { TScalar } from '../scalarTypes/type';
import styles from '../../GraphQLPage.module.scss';
import { toggleIsCharacterLvl, toggleIsCharactersLvl } from '../../../../../app/slices/docsSlise';

const CaractersResp: FC<TScalar> = ({ callback, title }) => {
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector((s) => s.docs.isCharactersLvl);

  const goToCharacter = () => {
    dispatch(toggleIsCharactersLvl(false));
    dispatch(toggleIsCharacterLvl(true));
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
            <Arg name="info" type="Info" callback={() => {}} newLine={false} lastArg={true} />
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
    </>
  );
};

export default CaractersResp;
