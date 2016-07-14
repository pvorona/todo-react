import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { todoReducer } from './todo/todos'
import { newTodoReducer } from './todo/new-todo'
import { multi } from './utils'
import throttle from 'lodash/throttle'

const initialState = {
  todos: [],
  newTodo: ''
}

const reducers = combineReducers({
  todos: todoReducer,
  newTodo: newTodoReducer
})

const enhanser = compose(applyMiddleware(multi), window.devToolsExtension && window.devToolsExtension())

const store = createStore(reducers, initialState, enhanser)

store.subscribe(throttle(() => {
  console.log('saving')
}, 1000))

export default store
