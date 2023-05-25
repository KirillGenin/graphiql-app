import React from 'react';
import styles from './PageNotFound.module.scss';
import image404 from '../../../assets/Page404.png';
import MainButton from '../../common/MainButton';
import { IconHomeUp } from '@tabler/icons-react';

const PageNotFound = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={image404} alt="page not found" />
      <MainButton title="Back home" rightIcon={<IconHomeUp size={'1.25rem'} />} type="button" />
    </div>
  );
};

export default PageNotFound;
