import createReducer from '../utils/createReducer'
import { TODO_ADD, TODO_CHANGE } from './todo.actions'

const todoAdd = (state, {title}) => ({
  ...state,
  todos: state.todos.concat({title}),
  newTodo: ''
})

const todoChange = (state, {title}) => ({
  ...state,
  newTodo: title
})

const todoReducer = createReducer({
  [TODO_ADD]: todoAdd,
  [TODO_CHANGE]: todoChange
})

export default todoReducer;
