import { UI_STATE } from '../state/defaultUiState';

const reducer = (state = UI_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_STATE':
      return {
        ...state,
        toggle: !state.toggle
      };
    case 'TOGGLE_STATE_TRUE':
      return {
        ...state,
        toggle: true
      };
    case 'TOGGLE_STATE_FALSE':
      return {
        ...state,
        toggle: false
      };
    default:
      return state;
  }
};

export default reducer;
