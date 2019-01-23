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

export const clearSize = () => ({
  type: 'CLEAR_SIZE'
});

export const toggleShoeCategoryTrue = () => ({
  type: 'SHOE_CATEGORY_TRUE'
});

export const toggleShoeCategoryFalse = () => ({
  type: 'SHOE_CATEGORY_FALSE'
});
