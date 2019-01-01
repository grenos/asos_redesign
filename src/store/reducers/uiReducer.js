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
    default:
      return state;
  }
};

export default reducer;
