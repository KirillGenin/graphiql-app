import React from 'react';
import styles from './HeadersEditor.module.scss';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { EditorView } from '@codemirror/view';
import { graphiqlActions } from '../../../app/slices/graphiqlSlice';

const HeadersEditor = () => {
  const dispatch = useAppDispatch();
  const headers = useAppSelector((state) => state.graphiql.headers);

  const myTheme = React.useRef(
    EditorView.theme({
      '&.cm-focused': {
        outline: 'none',
      },
    })
  );

  const onChange = React.useCallback(
    (value: string) => {
      dispatch(graphiqlActions.setHeaders(value.trim()));
    },
    [dispatch]
  );

  return (
    <CodeMirror
      value={headers}
      onChange={onChange}
      className={styles.codemirror}
      extensions={[json(), myTheme.current]}
    />
  );
};

export default HeadersEditor;
