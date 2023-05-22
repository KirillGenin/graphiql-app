import React, { useEffect } from 'react';
import { MainRoutes } from '../../../types/enums';
import { Navigate } from 'react-router';
import { useAuth } from '../../../utils/hooks/useAuth';
import styles from './GraphQLPage.module.scss';
import Documentation from './UI/Documentation';
import Browser from './UI/Browser';
import { URL, fetchSchema } from '../../../store/slices/docsSlise';
import { useAppDispatch /*, useAppSelector*/ } from '../../../store/hooks';

// type Field = {
//   args: {
//     name: string;
//     type: {
//       kind: string;
//       ofType: {
//         kind: string;
//         ofType: {
//           kind: string;
//           ofType: {
//             kind: string;
//           } | null;
//         } | null;
//       } | null;
//     };
//   };
//   description: string;
//   name: string;
// };

// type GraphQLShema = {
//   fields: Field[];
//   name: string;
//   kind: string;
// };

const GraphQLPage = () => {
  const { isAuth } = useAuth();
  const dispatch = useAppDispatch();
  // const data = useAppSelector((state) => state.docs.schema);
  // if (data) console.log(data);

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
