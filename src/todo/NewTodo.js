import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TextInput } from '../components'
import { addTodo, changeTodo } from './todo.creators'

class NewTodo extends Component {
  onSubmit (e) {
    e.preventDefault()
    if (!this.props.title) return
    this.props.dispatch(addTodo(this.props.title))
  }

  onChange (e) {
    this.props.dispatch(changeTodo(e.target.value))
  }

  render () {
    return (
      <form onSubmit={::this.onSubmit}>
        <TextInput
          onChange={::this.onChange}
          value={this.props.title} />
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  title: state.newTodo
})

export default connect(
  mapStateToProps
)(NewTodo)
