import React, { FC, useState } from 'react';
import Arg from '../parts/Arg';
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks';
import { TScalar } from '../scalarTypes/type';
import styles from '../../GraphQLPage.module.scss';
import {
  toggleIsInfoLvl,
  toggleIsLocationLvl,
  toggleIsLocationsLvl,
} from '../../../../../app/slices/docsSlise';
import Info from './Info';
import ReturnButton from '../../../../common/ReturnButton';

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
          <ReturnButton title={title} onClick={callback} />
          <h4 className={styles.title}>Locations</h4>
          <div>
            <Arg name="info" type="Info" callback={goToInfo} lastArg={true} />

            <Arg name="results" type="Location" list={true} callback={goToLocation} />
          </div>
        </>
      )}
      {info && <Info title="Locations" callback={backToLocations} />}
    </>
  );
};

export default LocationsResp;
