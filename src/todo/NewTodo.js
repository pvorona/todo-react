import React from 'react'
import { connect } from 'react-redux'
import { TextInput } from '../components'
import { addTodo } from './todos/todo.creators'
import { changeNewTodo, clearNewTodo } from './new-todo/new-todo.creators'
import { getNewTodo } from './todo.selectors'

const NewTodo = (props) =>
  <TextInput
    placeholder='What needs to be done?'
    className='new-todo'
    autoComplete="off"
    {...props}
  />

const mapDispatchToProps = (dispatch) => ({
  onKeyPress (e) {
    if (e.which === 13 && e.target.value) {
      dispatch([addTodo({title: e.target.value}), clearNewTodo()])
    }
  },
  onChange (e) {
    dispatch(changeNewTodo({title: e.target.value}))
  }
})

export default connect(getNewTodo, mapDispatchToProps)(NewTodo)
