export const capitalize = str => {
  if (typeof str !== 'string') return ''
  const firstChar = str.charAt(0).toUpperCase()

  return firstChar + str.slice(1)
}

export const toChar = code => String.fromCharCode(code)

export const fillArray = (length, map) => {
  return Array.from(Array(length + 1).keys(), map)
}
