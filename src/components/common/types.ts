export interface IButton {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  title?: string;
  type?: 'submit' | 'button';
  rightIcon: JSX.Element;
  width?: string;
}

export type TReturnButton = Pick<IButton, 'onClick' | 'title'>;
