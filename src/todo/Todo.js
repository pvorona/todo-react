import React from 'react'
import { connect } from 'react-redux'
import NewTodo from './NewTodo'
import TodoList from './TodoList'

const Todo = () =>
  <div>
    <NewTodo />
    <TodoList />
  </div>

export default connect()(Todo)
