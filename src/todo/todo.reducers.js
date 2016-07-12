import { createReducer } from '../utils'
import { addTodo, changeTodo } from './todo.creators'

const todoAdd = (todos, {title}) => [...todos, {title}]

const todoChange = (todos, {title, id}) => [
  ...todos.slice(0, id),
  Object.assign({}, todos[id], {title}),
  ...todos.slice(id + 1)
]

const todoReducer = createReducer({
  [addTodo]: todoAdd,
  [changeTodo]: todoChange
})

export { todoReducer, todoAdd, todoChange }
