import React, { FC } from 'react';
import { Button } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import { TReturnButton } from './types';

const ReturnButton: FC<TReturnButton> = ({ onClick, title }) => {
  return (
    <Button
      type="button"
      onClick={(e) => onClick(e)}
      rightIcon={<IconArrowLeft size={'1.2rem'} />}
      variant="light"
      color="dark"
      bg="#ffffff"
      radius="md"
      w={'8.5rem'}
      h={'2.25rem'}
      styles={{
        root: {
          ':hover': { backgroundColor: '#f3f0f0' },
        },
      }}
    >
      {title}
    </Button>
  );
};

export default ReturnButton;
