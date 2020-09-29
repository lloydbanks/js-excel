import getObj from './module'
import './scss/index.scss'

(async () => {
  await Promise.resolve(true)
  const obj = getObj()
  console.log(obj)
})()
