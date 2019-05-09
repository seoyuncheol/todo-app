import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const CHAGNE = "toto/CHANGE";
const INSERT = "todo/INSERT";
const REMOVE = "todo/REMOVE";
const TOGGLE = "todo/TOGGLE";

export const change = createAction(CHAGNE);
export const insert = createAction(INSERT);
export const remove = createAction(REMOVE);
export const toggle = createAction(TOGGLE);

let id = 2;
const initialState = {
  input: "",
  todoList: [
    { id: 0, text: "리액트 공부하기", done: true },
    { id: 1, text: "컴포넌트 스타일링 해보기", done: false }
  ]
};

export default handleActions(
  {
    [CHAGNE]: (state, { payload }) => {
      return {
        ...state,
        input: payload
      };
    },
    [INSERT]: (state, { payload: text }) =>
      produce(state, draft => {
        const newItem = {
          id: id++,
          text,
          done: false
        };
        draft.todoList.push(newItem);
      }),
    [TOGGLE]: (state, { payload: id }) =>
      produce(state, draft => {
        const idx = state.todoList.findIndex(item => item.id === id);
        draft.todoList[idx].done = !state.todoList[idx].done;
      }),
    [REMOVE]: (state, { payload: id }) => ({
      ...state,
      todoList: state.todoList.filter(item => item.id !== id)
    })
  },
  initialState
);
