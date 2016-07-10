import React from 'react'
import { connect } from 'react-redux'
import { getTodos } from './todo.selectors'

const TodoList = ({todos}) =>
  <ul>
    {todos.map((todo, i) =>
      <li key={i}>{todo.title}</li>)}
  </ul>

export default connect(getTodos)(TodoList)
