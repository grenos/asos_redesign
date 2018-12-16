import { TEST_ACTION } from '../actions/actionTypes';

const API_STATE = {
  key: ''
};

const reducer = (state = API_STATE, action) => {
  switch (action.type) {
    case TEST_ACTION:
      return {
        ...state,
        key: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
