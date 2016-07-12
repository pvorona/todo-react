import { TODO_ADD, TODO_CHANGE, TODO_REMOVE } from './todo.actions'
import { createAction } from '../../utils'

const addTodo = createAction(TODO_ADD)
const changeTodo = createAction(TODO_CHANGE)
const removeTodo = createAction(TODO_REMOVE)

export { addTodo, changeTodo, removeTodo }
