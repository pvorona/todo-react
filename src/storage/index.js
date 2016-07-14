function save (key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}

function get (key) {
  return JSON.parse(localStorage.getItem(key))
}

export { save, get }
