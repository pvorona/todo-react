import { createReducer } from '../utils'
import { addTodo, changeTodo, changeNewTodo } from './todo.creators'
import { Todo } from './Todo'

const todoAdd = (state, {title}) => ({
  ...state,
  todos: [...state.todos, new Todo({title})],
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
      todos[id].merge({title}),
      ...todos.slice(id + 1)
    ]
  }
}

const todoReducer = createReducer({
  [addTodo]: todoAdd,
  [changeNewTodo]: newTodoChange,
  [changeTodo]: todoChange
})

export default todoReducer;
