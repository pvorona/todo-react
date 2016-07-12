import { NEW_TODO_CHANGE, NEW_TODO_CLEAR } from './new-todo.actions'
import { createAction } from '../../utils'

const changeNewTodo = createAction(NEW_TODO_CHANGE)
const clearNewTodo = createAction(NEW_TODO_CLEAR)

export { changeNewTodo, clearNewTodo }
