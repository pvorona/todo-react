const getTodos = state => ({todos: state.todos})
const getNewTodo = state => ({title: state.newTodo})

export { getTodos, getNewTodo }