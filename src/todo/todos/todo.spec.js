import { ADD_TODO, TODO_CHANGE, TODO_REMOVE } from './todo.actions'
import { addTodo, changeTodo, removeTodo } from './todo.creators'
import { todoAdd, todoChange, todoRemove } from './todo.reducers'

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

  describe(TODO_REMOVE, () => {
    it('should return an array without removed todo', () => {
      const initial = [
        {title: 'This is my friend'},
        {title: 'This is my girl'},
        {title: 'This is my pet'}
      ]
      const action = removeTodo({id: 0})
      const actual = todoRemove(initial, action)

      expect(actual).to.deep.equal([
        {title: 'This is my girl'},
        {title: 'This is my pet'}
      ])
    })
  })
})