import React from 'react';
import styles from '../GraphQLPage.module.scss';
import MainButton from '../../../common/Button';
import { IconArrowLeft } from '@tabler/icons-react';
import DocumentationItem from './DocumentationItem';

const Documentation = () => {
  return (
    <aside className={styles.documentation}>
      <MainButton
        onClick={() => console.log('back')}
        title="Go back"
        type="button"
        rightIcon={<IconArrowLeft size={'1rem'} />}
      />
      <DocumentationItem />
    </aside>
  );
};

export default Documentation;
