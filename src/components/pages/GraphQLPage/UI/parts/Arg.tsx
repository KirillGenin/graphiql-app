import React from 'react';
import styles from '../../GraphQLPage.module.scss';

interface IArg {
  name: string;
  type: string;
  nonNull?: boolean;
  list?: boolean;
  listNonNull?: boolean;
  lastArg?: boolean;
}

const Arg = ({
  name,
  type,
  nonNull = false,
  list = false,
  listNonNull = false,
  lastArg = false,
}: IArg) => {
  const clickHandler = () => {};

  return (
    <>
      <br />
      <span className={styles.padding}>{name}: &nbsp;</span>
      {list ? '[' : ''}
      <span className={styles.link} onClick={clickHandler}>
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
