const getTodos = state => ({todos: state.todos})
const getNewTodo = state => ({value: state.newTodo})

export { getTodos, getNewTodo }