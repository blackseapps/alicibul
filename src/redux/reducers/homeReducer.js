import { GET_HOME_ADS, GET_HOME_ADS_CLEAR } from "../actions/homeAction";

const initialState = {
  ads: [],
  adsTotal: 0,
};

export function homeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_HOME_ADS :
      return {
        ...state,
        adsTotal: action.total,
        ads: [...state.ads, action.payload],
      };
    case GET_HOME_ADS_CLEAR :
      return { ...state, ads: [] };
    default :
      return state;
  }
}
