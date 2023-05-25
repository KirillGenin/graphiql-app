import React, { FC } from 'react';
import { Button } from '@mantine/core';
import { IButton } from './types';

const MainButton: FC<IButton> = ({ onClick, title, type, rightIcon }) => {
  return (
    <Button
      type={type}
      onClick={(e) => onClick(e)}
      rightIcon={rightIcon}
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

export default MainButton;
