import React from 'react';
import styles from '../../GraphQLPage.module.scss';

interface IArg {
  name: string;
  type: string;
  nonNull?: boolean;
  list?: boolean;
  listNonNull?: boolean;
  lastArg?: boolean;
  callback?: () => void;
}

const Arg = ({
  name,
  type,
  nonNull = false,
  list = false,
  listNonNull = false,
  lastArg = false,
  callback,
}: IArg) => {
  return (
    <>
      <br />
      <span className={styles.padding}>{name}: &nbsp;</span>
      {list ? '[' : ''}
      <span className={styles.link} onClick={callback}>
        {type}
      </span>
      {nonNull ? '!' : ''}
      {list ? ']' : ''}
      {listNonNull ? '!' : ''}
      {lastArg && <br />}
    </>
  );
};

export default Arg;
