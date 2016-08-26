import { newTodoChange as changeSingleTodo } from '../new-todo/new-todo.reducers'

const todoAdd = (todos, action) =>
  [...todos, changeSingleTodo(undefined, action)]

const todoChange = (todos, {id, ...options}) => [
  ...todos.slice(0, id),
  changeSingleTodo(todos[id], options),
  ...todos.slice(id + 1)
]

const todoRemove = (todos, {id}) => [
  ...todos.slice(0, id),
  ...todos.slice(id + 1)
]

const toggleCompleted = (todos, {id}) => [
  ...todos.slice(0, id),
  changeSingleTodo(todos[id], {completed: !todos[id].completed}),
  ...todos.slice(id + 1)
]

export { todoAdd, todoChange, todoRemove, toggleCompleted }
