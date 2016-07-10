import React from 'react'
import { connect } from 'react-redux'

const TodoList = ({todos}) =>
  <ul>
    {todos.map((todo, i) =>
      <li key={i}>{todo.title}</li>)}
  </ul>

const mapStateToProps = state => ({
  todos: state.todos
})

export default connect(mapStateToProps)(TodoList)
