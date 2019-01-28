import { UI_STATE } from '../state/defaultUiState';

const reducer = (state = UI_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_VIDEO_TRUE':
      return {
        ...state,
        isVideo: true
      };
    case 'TOGGLE_VIDEO_FALSE':
      return {
        ...state,
        isVideo: false
      };
    case 'CHOOSE_SIZE':
      return {
        ...state,
        sizeChosen: action.payload
      };
    case 'CLEAR_SIZE':
      return {
        ...state,
        sizeChosen: ''
      };
    case 'SHOE_CATEGORY_TRUE':
      return {
        ...state,
        isShoe: true
      };
    case 'SHOE_CATEGORY_FALSE':
      return {
        ...state,
        isShoe: false
      };
    case 'TOTAL_PRICE':
      return {
        ...state,
        totalPrice: state.totalPrice + action.payload
      };
    default:
      return state;
  }
};

export default reducer;
