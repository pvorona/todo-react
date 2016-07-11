import { createReducer } from '../utils'
import { addTodo, changeTodo, changeNewTodo } from './todo.creators'

const todoAdd = (state, {title}) => ({
  ...state,
  todos: state.todos.concat({title}),
  newTodo: ''
})

const newTodoChange = (state, {title}) => ({
  ...state,
  newTodo: title
})

const todoChange = (state, {title, id}) => {
  const { todos } = state
  const newTodos = [...todos]
  newTodos[id].title = title
  return {
    ...state,
    todos: newTodos
  }
}

const todoReducer = createReducer({
  [addTodo]: todoAdd,
  [changeNewTodo]: newTodoChange,
  [changeTodo]: todoChange
})

export default todoReducer;
