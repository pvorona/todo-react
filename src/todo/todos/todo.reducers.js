import { newTodoChange } from '../new-todo/new-todo.reducers'

const todoAdd = (todos, action) =>
  [...todos, newTodoChange(undefined, action)]

const todoChange = (todos, {id, ...rest}) => [
  ...todos.slice(0, id),
  newTodoChange(todos[id], rest),
  ...todos.slice(id + 1)
]

const todoRemove = (todos, {id}) => [
  ...todos.slice(0, id),
  ...todos.slice(id + 1)
]

const toggleCompleted = (todos, {id}) => [
  ...todos.slice(0, id),
  newTodoChange(todos[id], {completed: !todos[id].completed}),
  ...todos.slice(id + 1)
]

export { todoAdd, todoChange, todoRemove, toggleCompleted }
