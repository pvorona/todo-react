const multi = ({dispatch}) => next => action =>
  Array.isArray(action)
    ? action.forEach(dispatch)
    : next(action)

export default multi
