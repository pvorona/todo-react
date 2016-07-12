import { ADD_TODO, TODO_CHANGE } from './todo.actions'
import { addTodo, changeTodo } from './todo.creators'
import { todoAdd, todoChange } from './todo.reducers'

describe('todos', () => {
  describe(ADD_TODO, () => {
    it('adds new todo to the end of todos list', () => {
      const initial = [{title: 'You look so nice'}]
      const action = addTodo({title: 'Nice day do be happy!'})
      const actual = todoAdd(initial, action)

      expect(actual).to.deep.equal([
        {title: 'You look so nice'},
        {title: 'Nice day do be happy!'}
      ])
    })
  })

  describe(TODO_CHANGE, () => {
    it('should set new title', () => {
      const initial = [{title: 'What do you think of love?'}]
      const action = changeTodo({title: 'Let it be', id: 0})
      const actual = todoChange(initial, action)

      expect(actual).to.deep.equal([
        {title: 'Let it be'}
      ])
    })
  })
})