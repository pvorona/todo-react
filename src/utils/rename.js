function rename ([before, after], source) {
  source[after] = source[before]
  delete source.before
  return source
}

export { rename }
