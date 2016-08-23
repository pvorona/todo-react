import React from 'react'
import { connect } from 'react-redux'
import { TextInput } from '../components'
import { addTodo } from './todos/todo.creators'
import { changeNewTodo, clearNewTodo } from './new-todo/new-todo.creators'
import { getNewTodo } from './todo.selectors'

const NewTodo = ({onKeyDown, onChange, clearNewTodo, value}) =>
  <div style={{position: 'relative'}}>
    <TextInput
      placeholder='What needs to be done?'
      className='new-todo'
      autoComplete="off"
      value={value}
      onKeyDown={onKeyDown}
      onChange={onChange}
    />
    <button
      onClick={clearNewTodo}
      className="c-input__clear"
    />
  </div>

const mapDispatchToProps = (dispatch) => ({
  onKeyDown (e) {
    if (e.keyCode === 27) {
      dispatch(clearNewTodo())
    }
    if (e.keyCode === 13 && e.target.value) {
      dispatch(addTodo({title: e.target.value}))
      dispatch(clearNewTodo())
    }
  },
  onChange (e) {
    dispatch(changeNewTodo({title: e.target.value}))
  },
  clearNewTodo () {
    dispatch(clearNewTodo())
  }
})

export default connect(getNewTodo, mapDispatchToProps)(NewTodo)
