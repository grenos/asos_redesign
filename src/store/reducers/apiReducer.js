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
    case 'CHOOSE_CATEGORY':
      return {
        ...state,
        selectedCategoryName: action.payload
      };
    case 'API_RESULTS':
      return {
        ...state,
        apiResults: action.payload
      };
    case 'CLEAR_STATE_INPUT':
      return {
        ...state,
        searchInput: ''
      };
    case 'CLEAR_STATE_CATEGORY':
      return {
        ...state,
        selectedCategoryName: ''
      };
    default:
      return state;
  }
};

export default reducer;
