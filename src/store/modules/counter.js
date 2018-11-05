import { createAction, handleActions } from 'redux-actions';

const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

const initialState = {
  number: 1
};

export default handleActions({
  [INCREMENT]: (state, action) => ({ number: state.number + 1}),
  [DECREMENT]: (state, action) => ({ number: state.number - 1}),
}, initialState);
