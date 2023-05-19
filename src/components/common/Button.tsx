import React, { FC } from 'react';
import { Button } from '@mantine/core';

interface IButton {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  title: string;
  type: 'submit' | 'button';
  rightIcon: JSX.Element;
}

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
      w={'8rem'}
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
