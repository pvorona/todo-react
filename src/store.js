import { createStore, combineReducers } from 'redux'
import { todoReducer } from './todo/todo.reducers'
import { newTodoReducer } from './todo/new-todo.reducers'

const initialState = {
  todos: [],
  newTodo: ''
}

const reducers = combineReducers({
  todos: todoReducer,
  newTodo: newTodoReducer
})

const store = createStore(reducers, initialState, window.devToolsExtension && window.devToolsExtension())

export default store
