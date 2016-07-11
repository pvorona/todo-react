import { ADD_TODO } from './todo.actions'
import { todoAdd } from './todo.reducers'
import { addTodo } from './todo.creators'

describe(ADD_TODO, () => {
  it('sets newTodo to empty string', () => {
    const actual = todoAdd({}, addTodo())

    expect(actual).to.deep.equal({
      newTodo: ''
    })
  })
})