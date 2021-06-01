import {
  LOADING,
  ERROR,
  LANGUAGE,
  SIGN_IN,
} from "../actions/masterAction";


export function masterReducer(state = "", action) {

  const initialState = {
    error: false,
    loading: false,
    language: "TR",
    signIn: false,
  };

  switch (action.type) {
    case LOADING :
      return Object.assign(initialState, state, action.payload);
    case ERROR :
      return Object.assign(initialState, state, action.payload);
    case LANGUAGE :
      return Object.assign(initialState, state, action.payload);
    case SIGN_IN :
      return Object.assign(initialState, state, action.payload);
    default :
      return state;
  }
}
