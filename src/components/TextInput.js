import React, { Component } from 'react'

class TextInput extends Component {
  render () {
    return (
      <input className='c-input c-input--animated-shadow c-input--animated-border-2' type='text' {...this.props} />
    )
  }
}

export default TextInput