import React, { FC } from 'react';
import TopLevel from './TopLevel';
import QueryLevel from './QueryLevel';

type TDoc = {
  visible: boolean;
};

const DocumentationItem: FC<TDoc> = ({ visible }) => {
  return (
    <>
      {visible && (
        <>
          <TopLevel />
          <QueryLevel />
        </>
      )}
    </>
  );
};

export default DocumentationItem;
