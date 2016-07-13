import React from 'react'
import { connect } from 'react-redux'
import { TextInput } from '../components'
import { addTodo } from './todos/todo.creators'
import { changeNewTodo, clearNewTodo } from './new-todo/new-todo.creators'
import { getNewTodo } from './todo.selectors'

const NewTodo = ({title, dispatch}) => {
  const onSubmit = e => {
    e.preventDefault()
    if (!title) return
    dispatch([addTodo({title}), clearNewTodo()])
  }

  const onChange = e =>
    dispatch(changeNewTodo({title: e.target.value}))

  return (
    <form
      className='new-todo'
      onSubmit={onSubmit}>
      <TextInput
        placeholder='What needs to be done?'
        className='c-input c-input--animated-shadow c-input--animated-placeholder c-input--animated-border-2 text-big'
        onChange={onChange}
        value={title} />
    </form>
  )
}

export default connect(getNewTodo)(NewTodo)
