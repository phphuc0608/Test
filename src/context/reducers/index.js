const auth = (state, {type, payload}) => {
  switch (type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
      };

    default:
      return state;
  }
};

export default auth;
