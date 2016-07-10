import { TODO_ADD, TODO_CHANGE } from './todo.actions'

const addTodo = title => ({
  type: TODO_ADD,
  title
})

const changeTodo = title => ({
  type: TODO_CHANGE,
  title
})

export {addTodo, changeTodo}
