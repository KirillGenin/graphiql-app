import cookie from 'cookie';

export const useAuth = () => {
  const { email, token, id } = cookie.parse(document.cookie);

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
};
