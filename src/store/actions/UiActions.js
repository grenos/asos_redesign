// @ @ @

// UI ACTIONS

// @ @ @

// shorthand of writting actions
export const toggleVideoTrue = () => ({
  type: 'TOGGLE_VIDEO_TRUE'
});

export const toggleVideoFalse = () => ({
  type: 'TOGGLE_VIDEO_FALSE'
});

export const chooseSize = size => ({
  type: 'CHOOSE_SIZE',
  payload: size
});
