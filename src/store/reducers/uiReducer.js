import { TEST_ACTION } from '../actions/actions';

import { initState } from '../store';

const reducer = (state = initState, action) => {
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
