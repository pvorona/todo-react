import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TextInput } from '../components'
import { addTodo, changeTodo } from './todo.creators'
import { getNewTodo } from './todo.selectors'

const NewTodo = ({title, dispatch}) => {
  const onSubmit = (e) => {
    e.preventDefault()
    if (!title) return
    dispatch(addTodo(title))
  }

  const onChange = e =>
    dispatch(changeTodo(e.target.value))

  return (
    <form onSubmit={onSubmit}>
      <TextInput
        onChange={onChange}
        value={title} />
    </form>
  )
}

export default connect(getNewTodo)(NewTodo)
