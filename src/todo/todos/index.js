import { createReducer } from '../../utils'
import { addTodo, changeTodo, removeTodo } from './todo.creators'
import { todoAdd, todoChange, todoRemove } from './todo.reducers'

const todoReducer = createReducer({
  [addTodo]: todoAdd,
  [changeTodo]: todoChange,
  [removeTodo]: todoRemove
})

export { todoReducer }