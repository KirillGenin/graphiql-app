import React from 'react';
import styles from './ResponseArea.module.scss';
import { useAppSelector } from '../../../app/hooks';
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { EditorView } from '@codemirror/view';
import spinner from '../../../assets/spinning-circles.svg';

const ResponseArea = React.memo(() => {
  const { response, loading, isInitFetch } = useAppSelector((state) => state.graphiql);

  const myTheme = React.useRef(
    EditorView.theme({
      '&': {
        background: 'none !important',
      },
      '&.cm-focused': {
        outline: 'none',
      },
      '.cm-gutters': {
        display: 'none !important',
      },
    })
  );

  return (
    <>
      {isInitFetch ? (
        loading ? (
          <img className={styles.spinner} src={spinner} alt="..Loading" />
        ) : (
          <div className={styles['codemirror-wrapper']}>
            <CodeMirror
              value={response}
              className={styles.codemirror}
              extensions={[json(), myTheme.current]}
              readOnly
            />
          </div>
        )
      ) : null}
    </>
  );
});

export default ResponseArea;
