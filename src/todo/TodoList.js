import React from 'react'
import { connect } from 'react-redux'
import { getTodos } from './todo.selectors'
import { TextInput } from '../components'
import { changeTodo } from './todos/todo.creators'

const TodoList = ({todos, onChange}) =>
  <ul>
    {todos.map((todo, i) =>
      <li key={i} className='todo-list__item todo-list__item--animated-fadein'>
        <TextInput
          className='c-input c-input--animated-shadow c-input--animated-border-1'
          onChange={onChange.bind(this, i)}
          value={todo.title} />
      </li>)}
  </ul>

const mapDispatchToProps = dispatch => ({
  onChange (id, e) {
    dispatch(changeTodo({id, title: e.target.value}))
  }
})

export default connect(getTodos, mapDispatchToProps)(TodoList)
