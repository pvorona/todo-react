import React from 'react'
import NewTodo from './todo/NewTodo'
import TodoList from './todo/TodoList'
import { Provider } from 'react-redux'
import store from './store'
import './styles'

export default props =>
  <Provider store={store}>
    <div>
      <NewTodo />
      <TodoList />
    </div>
  </Provider>

