import { TODO_ADD, TODO_CHANGE } from './todo.actions'
import createAction from '../utils/createAction'

const addTodo = createAction(TODO_ADD)
const changeTodo = createAction(TODO_CHANGE)

export { addTodo, changeTodo }
