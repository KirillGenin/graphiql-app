import React from 'react';
import styles from './GraphiQL.module.scss';
import ResponseArea from './ResponseArea';
import RequestEditor from './RequestEditor';
import 'react-tooltip/dist/react-tooltip.css';
import Toolbar from './Toolbar';
import EditorToolsTabs from './EditorToolsTabs';
import { useAppSelector } from '../../app/hooks';
import HeadersEditor from './HeadersEditor';
import VariablesEditor from './VariablesEditor';

const GraphiQL = () => {
  const openAddEditor = useAppSelector((state) => state.graphiql.openAddEditor);
  const activeTab = useAppSelector((state) => state.graphiql.activeTab);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={`${styles.section} ${styles['section-graphiql']}`}>
          <div className={styles['query-wrapper']}>
            <div className={styles['codemirror-wrapper']}>
              <RequestEditor />
            </div>
            <Toolbar />
          </div>
          <EditorToolsTabs />
          {openAddEditor && (
            <div className={styles['codemirror-wrapper']}>
              {activeTab === 'variables' && <VariablesEditor />}
              {activeTab === 'headers' && <HeadersEditor />}
            </div>
          )}
        </div>
        <div className={styles.section}>
          <ResponseArea />
        </div>
      </div>
    </>
  );
};

export default GraphiQL;
