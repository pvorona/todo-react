const createReducer = (handlers, initialState = []) => (state = initialState, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state

export default createReducer
