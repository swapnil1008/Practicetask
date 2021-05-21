const INITIAL_STATE = {
  isSignedIn: false,
  role: "",
};
export const loginreducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        isSignedIn: true,
        role: action.payload.role,
      };
    case "SIGN_OUT":
      return {
        ...state,
        isSignedIn: false,
        role: "",
      };
    default:
      return state;
  }
};
