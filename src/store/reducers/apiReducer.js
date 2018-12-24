const API_STATE = {
  searchInput: '',
  selectedCategiryId: ''
};

const reducer = (state = API_STATE, action) => {
  switch (action.type) {
    case 'SEARCH_INPUT':
      return {
        ...state,
        searchInput: action.payload
      };
    case 'SELECTED_GATEGORY':
      return {
        ...state,
        selectedCategiryId: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
