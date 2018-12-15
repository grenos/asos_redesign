import { TEST_ACTION } from './actionTypes';

export const testAction = key => {
  return {
    type: TEST_ACTION,
    payload: key
  };
};

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
