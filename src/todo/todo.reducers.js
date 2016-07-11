import { createReducer } from '../utils'
import { addTodo, changeNewTodo } from './todo.creators'

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
  return {
    ...state,
    todos: {
      ...state.todos,
      [id]: {title}
    }
  }
}

const todoReducer = createReducer({
  [addTodo]: todoAdd,
  [changeNewTodo]: newTodoChange
})

export default todoReducer;
