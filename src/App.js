import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Todo from './todo/Todo'
import './styles'

export default props =>
  <Provider store={store}>
    <Todo />
  </Provider>

