import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
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
  createStore(reducers, initialState, compose(applyMiddleware(multi), window.devToolsExtension && window.devToolsExtension()))

export default store
