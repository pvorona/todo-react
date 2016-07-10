import createReducer from '../utils/createReducer'
import { addTodo, changeTodo } from './todo.creators'

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
  [addTodo]: todoAdd,
  [changeTodo]: todoChange
})

export default todoReducer;
