const API_STATE = {
  key: '',
  searchInput: ''
};

const reducer = (state = API_STATE, action) => {
  switch (action.type) {
    case 'SEARCH_INPUT':
      return {
        ...state,
        searchInput: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
