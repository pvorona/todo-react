import React from 'react'
import { connect } from 'react-redux'
import { TextInput } from '../components'
import { addTodo } from './todos/todo.creators'
import { changeNewTodo, clearNewTodo } from './new-todo/new-todo.creators'
import { getNewTodo } from './todo.selectors'

const NewTodo = ({title, onSubmit, onChange}) =>
  <form
    autoComplete='off'
    className='new-todo'
    onSubmit={onSubmit}>
    <TextInput
      name='newTodo'
      placeholder='What needs to be done?'
      className='new-todo__input'
      onChange={onChange}
      value={title} />
  </form>

const mapDispatchToProps = dispatch => ({
  onSubmit (e) {
    e.preventDefault()
    const title = e.currentTarget.newTodo.value
    if (!title) return
    dispatch([addTodo({title}), clearNewTodo()])
  },
  onChange (e) {
    dispatch(changeNewTodo({title: e.target.value}))
  }
})

export default connect(getNewTodo, mapDispatchToProps)(NewTodo)
