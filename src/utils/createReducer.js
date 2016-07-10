export default (settings, initialState = []) => (state = initialState, action) =>
  settings[action.type] ? settings[action.type](state, action) : state
