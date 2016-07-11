import { createReducer } from '../utils'
import { addTodo, changeTodo, changeNewTodo } from './todo.creators'

const todoAdd = (state, {title}) => ({
  ...state,
  // todos: [...state.todos, {title}],
  newTodo: ''
})

const newTodoChange = (state, {title}) => ({
  ...state,
  newTodo: title
})

const todoChange = (state, {title, id}) => {
  const { todos } = state
  return {
    ...state,
    todos: [
      ...todos.slice(0, id),
      Object.assign({}, todos[id], {title}),
      ...todos.slice(id + 1)
    ]
  }
}

const todoReducer = createReducer({
  [addTodo]: todoAdd,
  [changeNewTodo]: newTodoChange,
  [changeTodo]: todoChange
})

export { todoReducer, todoAdd }
