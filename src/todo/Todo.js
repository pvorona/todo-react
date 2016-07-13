import React from 'react'
import { connect } from 'react-redux'
import NewTodo from './NewTodo'
import TodoList from './TodoList'
import './todo.scss'
import './todo-list.scss'

const Todo = () =>
  <div className='l-page'>
    <div className='l-h-center l-content'>
      <NewTodo />
      <TodoList className='todo-list' />
    </div>
  </div>

export default connect()(Todo)
