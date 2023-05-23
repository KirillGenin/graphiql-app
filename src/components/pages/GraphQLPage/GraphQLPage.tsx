import React, { useEffect } from 'react';
import { MainRoutes } from '../../../types/enums';
import { Navigate } from 'react-router';
import { useAuth } from '../../../utils/hooks/useAuth';
import styles from './GraphQLPage.module.scss';
import Documentation from './UI/Documentation';
import Browser from './UI/Browser';
import { URL, fetchSchema } from '../../../app/slices/docsSlise';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';

type Field = {
  args: [
    {
      name: string;
      type: {
        kind: string;
        ofType: {
          kind: string;
          ofType: {
            kind: string;
            ofType: {
              kind: string;
            } | null;
          } | null;
        } | null;
      };
    }
  ];
  description: string;
  name: string;
};

type Fields = {
  character: Field;
  characters: Field;
  characterByIds: Field;
  location: Field;
  locations: Field;
  locationByIds: Field;
  episode: Field;
  episodes: Field;
  episodeByIds: Field;
};

type GraphQLObjectType = {
  _fields: Fields;
  name: string;
  kind: string;
};

type GraphQLShema = {
  _queryType: GraphQLObjectType;
};

const GraphQLPage = () => {
  const { isAuth } = useAuth();
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.docs.schema) as GraphQLShema;
  if (data) {
    // console.log(data._queryType._fields.characters.args.map((e) => e.name));
    console.log(data._queryType._fields.characters.description);
  }

  useEffect(() => {
    dispatch(fetchSchema(URL));
  }, [dispatch]);

  return isAuth ? (
    <div className={styles.wrapper}>
      <Documentation />
      <Browser />
    </div>
  ) : (
    <Navigate to={MainRoutes.AuthPage} />
  );
};

export default GraphQLPage;
