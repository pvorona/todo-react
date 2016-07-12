import { createStore, combineReducers, applyMiddleware } from 'redux'
import { todoReducer } from './todo/todos'
import { newTodoReducer } from './todo/new-todo'
import { multi } from './utils'

const initialState = {
  todos: [],
  newTodo: ''
}

const reducers = combineReducers({
  todos: todoReducer,
  newTodo: newTodoReducer
})

const store =
  createStore(reducers, initialState, applyMiddleware(multi))

  // , window.devToolsExtension && window.devToolsExtension()

export default store
