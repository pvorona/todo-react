import { clearNewTodo, changeNewTodo } from './new-todo.creators'
import { newTodoClear, newTodoChange } from './new-todo.reducers'
import { createReducer } from '../../utils'

const newTodoReducer = createReducer({
  [clearNewTodo]: newTodoClear,
  [changeNewTodo]: newTodoChange
})

export { newTodoReducer }