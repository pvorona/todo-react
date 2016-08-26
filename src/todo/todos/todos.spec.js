import { ADD_TODO, TODO_CHANGE, TODO_REMOVE, TODO_TOGGLE_COMPLETED } from './todo.actions'
import { addTodo, changeTodo, removeTodo, toggleCompletedTodo } from './todo.creators'
import { todoAdd, todoChange, todoRemove, toggleCompleted } from './todo.reducers'

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

  describe(TODO_TOGGLE_COMPLETED, () => {
    it('should toggle completed state', () => {
      const initial = [
        {title: 'Be happy, my friend'},
        {title: 'Hope you will be ok'}
      ]
      const action = toggleCompletedTodo({id: 1})
      const actual = toggleCompleted(initial, action)

      console.log('actual', actual);
      expect(actual).to.deep.equal([
        {title: 'Be happy, my friend'},
        {title: 'Hope you will be ok', completed: true}
      ])

      expect(toggleCompleted(actual, action)).to.deep.equal([
        {title: 'Be happy, my friend'},
        {title: 'Hope you will be ok', completed: false}
      ])
    })
  })
})