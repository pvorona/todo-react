const todoAdd = (todos, {title}) =>
  [...todos, {title}]

const todoChange = (todos, {title, id}) => [
  ...todos.slice(0, id),
  Object.assign({}, todos[id], {title}),
  ...todos.slice(id + 1)
]

const todoRemove = (todos, {id}) => [
  ...todos.slice(0, id),
  ...todos.slice(id + 1)
]

export { todoAdd, todoChange, todoRemove }
