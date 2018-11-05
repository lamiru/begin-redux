import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

const CHANGE_INPUT = 'todo/CHANGE_INPUT';
const INSERT = 'todo/INSERT';
const TOGGLE = 'todo/TOGGLE';
const REMOVE = 'todo/REMOVE';

export const changeInput = createAction(CHANGE_INPUT);
export const insert = createAction(INSERT);
export const toggle = createAction(TOGGLE);
export const remove = createAction(REMOVE);

let id = 2;

const initialState = Map({
  input: '',
  todos: List([
    Map({
      id: 0,
      text: '걷기',
      checked: false
    }),
    Map({
      id: 1,
      text: '코딩하기',
      checked: true
    })
  ])
});

export default handleActions({
  [CHANGE_INPUT]: (state, action) => {
    return state.set('input', action.payload);
  },
  [INSERT]: (state, { payload: text }) => {
    const item = Map({ id: id++, checked: false, text });
    return state.update('todos', todos => todos.push(item));
  },
  [TOGGLE]: (state, { payload: id }) => {
    // id는 다른 아이템을 삭제해도 변하지 않는 고유값
    // index 는 현재 남아있는 아이템 중 몇번째 순서인지를 나타내므로 id와 다름
    const index = state.get('todos').findIndex(item => item.get('id') === id);
    return state.updateIn(['todos', index, 'checked'], checked => !checked);
  },
  [REMOVE]: (state, { payload: id }) => {
    const index = state.get('todos').findIndex(item => item.get('id') === id);
    return state.deleteIn(['todos', index]);
  }
}, initialState);
