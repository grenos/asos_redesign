import { API_STATE } from '../state/defaultApiState';

const reducer = (state = API_STATE, action) => {
  switch (action.type) {
    case 'SEARCH_INPUT':
      return {
        ...state,
        searchInput: action.payload
      };
    case 'CHOOSE_GENDER':
      return {
        ...state,
        chooseGender: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
