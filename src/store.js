import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { todoReducer } from './todo/todos'
import { newTodoReducer } from './todo/new-todo'
import throttle from 'lodash/throttle'
import { save, get } from './storage'
import { defaultState } from './default-state'

const initialState = get('state') || defaultState

const reducers = combineReducers({
  todos: todoReducer,
  newTodo: newTodoReducer
})

const enhancer = compose(window.devToolsExtension && window.devToolsExtension())
// const enhancer = compose(applyMiddleware(multi), window.devToolsExtension && window.devToolsExtension())

const store = createStore(reducers, initialState, enhancer)

store.subscribe(throttle(() => {
  save('state', store.getState())
}, 0))

export default store
