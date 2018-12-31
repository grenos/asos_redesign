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
    case 'UPDATE_OFFSET':
      return {
        ...state,
        apiOffset: state.apiOffset + action.payload
      };
    case 'API_RESULTS':
      return {
        ...state,
        // spread existing state.apiResults + new results from pagination
        apiResults: [...state.apiResults, ...action.payload]
      };
    case 'CLEAR_STATE_INPUT':
      return {
        ...state,
        searchInput: ''
      };
    case 'API_RESULT':
      return {
        ...state,
        apiResult: action.payload
      };
    case 'CLEAR_STATE_CATEGORY':
      return {
        ...state,
        selectedCategoryName: ''
      };
    case 'CLEAR_STATE_OFFSET':
      return {
        ...state,
        apiOffset: 0
      };
    case 'CLEAR_STATE_API_RESULTS':
      return {
        ...state,
        apiResults: []
      };
    default:
      return state;
  }
};

export default reducer;
