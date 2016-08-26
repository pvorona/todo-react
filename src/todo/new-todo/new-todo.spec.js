import { NEW_TODO_CLEAR, NEW_TODO_CHANGE } from './new-todo.actions'
import { newTodoClear, newTodoChange } from './new-todo.reducers'
import { clearNewTodo, changeNewTodo } from './new-todo.creators'

describe('newTodo', () => {
  describe(NEW_TODO_CLEAR, () => {
    it('sets newTodo to empty string', () => {
      const action = clearNewTodo()
      const actual = newTodoClear({}, action)

      expect(actual).to.deep.equal({title: ''})
    })
  })

  describe(NEW_TODO_CHANGE, () => {
    it('sets newTodo to passed string', () => {
      const action = changeNewTodo({title: 'Good things are coming!'})
      const actual = newTodoChange({}, action)

      expect(actual).to.deep.equal({title: 'Good things are coming!'})
    })
  })
})