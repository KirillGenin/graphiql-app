import React, { FC, useState } from 'react';
import Arg from '../parts/Arg';
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';
import MainButton from '../../../../common/Button';
import { IconArrowLeft } from '@tabler/icons-react';
import { TScalar } from '../scalarTypes/type';
import styles from '../../GraphQLPage.module.scss';
import {
  toggleIsInfoLvl,
  toggleIsLocationLvl,
  toggleIsLocationsLvl,
} from '../../../../../app/slices/docsSlise';
import Info from './Info';

const LocationsResp: FC<TScalar> = ({ callback, title }) => {
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector((s) => s.docs.isLocationsLvl);

  const [info, setInfo] = useState(false);

  const goToLocation = () => {
    dispatch(toggleIsLocationsLvl(false));
    dispatch(toggleIsLocationLvl(true));
  };

  const goToInfo = () => {
    dispatch(toggleIsLocationsLvl(false));
    dispatch(toggleIsInfoLvl(true));
    setInfo((s) => !s);
  };

  const backToLocations = () => {
    dispatch(toggleIsLocationsLvl(true));
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
          <h4 className={styles.title}>Locations</h4>
          <div>
            <Arg name="info" type="Info" callback={goToInfo} newLine={false} lastArg={true} />

            <Arg
              name="results"
              type="Location"
              list={true}
              callback={goToLocation}
              newLine={false}
            />
          </div>
        </>
      )}
      {info && <Info title="Locations" callback={backToLocations} />}
    </>
  );
};

export default LocationsResp;
