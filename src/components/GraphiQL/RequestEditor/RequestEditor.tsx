import React from 'react';
import styles from './RequestEditor.module.scss';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { EditorView } from '@codemirror/view';
import { graphiqlActions } from '../../../app/slices/graphiqlSlice';

const RequestEditor = () => {
  const dispatch = useAppDispatch();
  const query = useAppSelector((state) => state.graphiql.query);

  const myTheme = React.useRef(
    EditorView.theme({
      '&.cm-focused': {
        outline: 'none',
      },
    })
  );

  const onChange = React.useCallback(
    (value: string) => {
      dispatch(graphiqlActions.setQuery(value.trim()));
    },
    [dispatch]
  );

  return (
    <CodeMirror
      value={query}
      onChange={onChange}
      className={styles.codemirror}
      extensions={[json(), myTheme.current]}
    />
  );
};

export default RequestEditor;
