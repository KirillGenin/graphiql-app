import { SegmentedControl } from '@mantine/core';
import React from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const LanguageBar = () => {
  const { t } = useTranslation();

  const languages = [
    { label: t('en'), value: 'en' },
    { label: t('ru'), value: 'ru' },
  ];

  return (
    <SegmentedControl
      data={languages}
      defaultValue={localStorage.getItem('i18nextLng')?.split('-')[0] ?? 'en'}
      onChange={(e) => i18next.changeLanguage(e)}
      size="xs"
      color="dark"
      bg={'transparent'}
      mr={'0.6rem'}
    />
  );
};

export default LanguageBar;
