const getTodos = state => ({todos: state.todos})
const getNewTodo = state => ({value: state.newTodo.title})

export { getTodos, getNewTodo }