import React from 'react';
import styles from './PageNotFound.module.scss';
import image404 from '../../../assets/Page404.png';
import MainButton from '../../common/MainButton';
import { IconHomeUp } from '@tabler/icons-react';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

const PageNotFound = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={image404} alt="page not found" />
      <MainButton
        title={t('button404title')!}
        rightIcon={<IconHomeUp size={'1.25rem'} />}
        type="button"
        onClick={() => navigate('/')}
      />
    </div>
  );
};

export default PageNotFound;
