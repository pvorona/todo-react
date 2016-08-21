import React from 'react'
import { connect } from 'react-redux'
import { getTodos } from './todo.selectors'
import { TextInput } from '../components'
import { changeTodo, removeTodo } from './todos/todo.creators'
import { List } from './List'

const mapTodos = ({todos, changeTodo, removeTodo}) =>
  todos.map((todo, i) =>
    <li
      key={i}
      className='todo-list__item todo-list__item--animated-fadein'>
      <TextInput
        className='c-input c-input--animated-shadow c-input--animated-border-1'
        onChange={changeTodo.bind(this, i)}
        value={todo.title}
      />
      <div
        className="c-input__remove"
        onClick={removeTodo.bind(this, i)}
      />
    </li>)

const mapDispatchToProps = (dispatch) => ({
  changeTodo (id, e) {
    dispatch(changeTodo({id, title: e.target.value}))
  },
  removeTodo (id) {
    dispatch(removeTodo({id}))
  }
})

export default connect(getTodos, mapDispatchToProps)(List(mapTodos))
