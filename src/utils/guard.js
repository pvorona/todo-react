function guard (condition, action) {
  if (!condition) return
  action()
}

export default guard
