// @ @ @

// API ACTIONS

// @ @ @

export const searchInput = data => ({
  type: 'SEARCH_INPUT',
  payload: data
});

// @ @ @

// UI ACTIONS

// @ @ @

// shorthand of writting actions
export const toggleState = () => ({
  type: 'TOGGLE_STATE'
});

export const toggleStateTrue = () => ({
  type: 'TOGGLE_STATE_TRUE'
});

export const toggleStateFalse = () => ({
  type: 'TOGGLE_STATE_FALSE'
});
