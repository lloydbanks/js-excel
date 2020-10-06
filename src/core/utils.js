export const capitalize = str => {
  if (typeof str !== 'string') return ''
  const firstChar = str.charAt(0).toUpperCase()

  return firstChar + str.slice(1)
}
