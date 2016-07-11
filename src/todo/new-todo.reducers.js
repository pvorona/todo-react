import { createReducer } from '../utils'
import { addTodo, changeNewTodo } from './todo.creators'

const todoAdd = (state, {title}) => ''

const newTodoChange = (state, {title}) => title

const newTodoReducer = createReducer({
  [addTodo]: todoAdd,
  [changeNewTodo]: newTodoChange
})

export { newTodoReducer, todoAdd, newTodoChange }
