const newTodoClear = (state, action) => ({title: ''})
const newTodoChange = (state, {type, ...rest}) =>
  Object.assign({}, state, rest)

export { newTodoClear, newTodoChange }
