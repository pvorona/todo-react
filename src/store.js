import { createStore } from 'redux'
import reducers from './todo/todo.reducers'

const initialState = {
  todos: [],
  newTodo: ''
}

const store = createStore(reducers, initialState, window.devToolsExtension && window.devToolsExtension())

export default store
