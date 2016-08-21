import React from 'react'

const List = (items) => (props) =>
  <ul>
    {items(props)}
  </ul>

export { List }
