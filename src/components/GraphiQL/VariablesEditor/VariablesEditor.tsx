import React from 'react';
import styles from './VariablesEditor.module.scss';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { EditorView } from '@codemirror/view';
import { graphiqlActions } from '../../../app/slices/graphiqlSlice';

const VariablesEditor = () => {
  const dispatch = useAppDispatch();
  const variables = useAppSelector((state) => state.graphiql.variables);

  const myTheme = React.useRef(
    EditorView.theme({
      '&.cm-focused': {
        outline: 'none',
      },
    })
  );

  const onChange = React.useCallback(
    (value: string) => {
      dispatch(graphiqlActions.setVariables(value.trim()));
    },
    [dispatch]
  );

  return (
    <CodeMirror
      value={variables}
      onChange={onChange}
      className={styles.codemirror}
      extensions={[json(), myTheme.current]}
    />
  );
};

export default VariablesEditor;
