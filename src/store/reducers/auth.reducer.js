import { SIGNUP } from "../actions/auth.action";

const initalState = {
  token: null,
  userId: null,
};

const AuthReduer = (state = initalState, action) => {
  switch (action.type) {
    case SIGNUP:
      return { ...state, token: action.token, userId: action.userId };
    default:
      return state;
  }
};

export default AuthReduer;
