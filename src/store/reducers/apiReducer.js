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
    case 'CHOOSE_BRAND':
      return {
        ...state,
        selectBrandName: action.payload
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
    case 'SIMILAR_ITEMS':
      return {
        ...state,
        similarItems: [...state.similarItems, action.payload]
      };
    case 'CLEAR_STATE_SIMILAR_ITEMS':
      return {
        ...state,
        similarItems: ''
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
    case 'CLEAR_BRANDS':
      return {
        ...state,
        selectBrandName: ''
      };
    case 'ADD_TO_CART':
      return {
        ...state,
        // ...action.payload,
        cart: [
          ...state.cart,
          {
            id: action.payload.id,
            image: action.payload.image,
            name: action.payload.name,
            size: action.payload.size,
            price: action.payload.price,
            qty: action.payload.qty
          }
        ]
      };
    case 'DELETE_CART_ITEM':
      return {
        ...state,
        cart: state.cart.filter((item) => action.payload !== item.id)
      };

    default:
      return state;
  }
};

export default reducer;
