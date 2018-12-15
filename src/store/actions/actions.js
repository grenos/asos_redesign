import { TEST_ACTION } from './actionTypes';

export const testAction = key => {
  return {
    type: TEST_ACTION,
    payload: key
  };
};
