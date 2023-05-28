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
import { useTranslation } from 'react-i18next';

const GraphiQL = () => {
  const openAddEditor = useAppSelector((state) => state.graphiql.openAddEditor);
  const activeTab = useAppSelector((state) => state.graphiql.activeTab);
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.wrapper}>
        <div className={`${styles.section} ${styles['section-graphiql']}`}>
          <p className={styles['source']}>
            <a
              className={styles['source__link']}
              href="https://rickandmortyapi.com/graphql"
              target="_blank"
              rel="noreferrer"
            >
              {`${t('rickandmortyapi')}`}
            </a>
          </p>
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
