import { SegmentedControl } from '@mantine/core';
import React from 'react';
import i18next from 'i18next';

const LanguageBar = () => {
  const languages = [
    { label: 'EN', value: 'en' },
    { label: 'RU', value: 'ru' },
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
