console.log('module works')

export default function() {
  const obj = {a: 1}

  return {
    ...obj,
    b: 1
  }
}
