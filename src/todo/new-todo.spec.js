import { ADD_TODO, NEW_TODO_CHANGE } from './todo.actions'
import { todoAdd, newTodoChange } from './todo.reducers'
import { addTodo, changeNewTodo } from './todo.creators'

describe(ADD_TODO, () => {
  it('sets newTodo to empty string', () => {
    const action = addTodo()
    const actual = todoAdd({}, action)

    expect(actual).to.deep.equal({
      newTodo: ''
    })
  })
})

describe(NEW_TODO_CHANGE, () => {
  it('sets newTodo to passed string', () => {
    const action = changeNewTodo({title: 'Good things are coming!'})
    const actual = newTodoChange({}, action)

    expect(actual).to.deep.equal({
      newTodo: 'Good things are coming!'
    })
  })
})