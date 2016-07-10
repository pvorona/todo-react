const createAction = (type) => {
  const actionCreator = (payload) => ({
    type,
    ...payload
  })
  actionCreator.toString = _ => type
  return actionCreator
}

export default createAction
