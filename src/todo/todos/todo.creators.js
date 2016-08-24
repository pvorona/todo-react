import { TODO_ADD, TODO_CHANGE, TODO_REMOVE, TODO_TOGGLE_COMPLETED } from './todo.actions'
import { createAction } from '../../utils'

const addTodo = createAction(TODO_ADD)
const changeTodo = createAction(TODO_CHANGE)
const removeTodo = createAction(TODO_REMOVE)
const toggleCompletedTodo = createAction(TODO_TOGGLE_COMPLETED)

export { addTodo, changeTodo, removeTodo, toggleCompletedTodo }
