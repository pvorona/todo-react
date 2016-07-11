import React from 'react'
import { connect } from 'react-redux'
import { getTodos } from './todo.selectors'
import { TextInput } from '../components'
import { changeTodo } from './todo.creators'

const TodoList = ({todos, dispatch}) => {
  const onChange = (id, e) =>
    dispatch(changeTodo({id, title: e.target.value}))

  return (<ul>
      {todos.map((todo, i) =>
        <li key={i}>
          <TextInput
            className='c-input c-input--animated-shadow c-input--animated-border-1'
            onChange={onChange.bind(this, i)}
            value={todo.title} />
        </li>)}
    </ul>)
}

export default connect(getTodos)(TodoList)
