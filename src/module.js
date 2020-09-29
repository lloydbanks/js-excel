console.log('module works')

async function module() {
  return Promise.resolve('resolved!!!...')
}

module().then(console.log)
