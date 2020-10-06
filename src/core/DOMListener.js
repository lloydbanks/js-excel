import { capitalize } from '@core/utils'

export default class DOMListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('Parent element is required for DOMListener!')
    }
    this.$root = $root
    this.listeners = listeners
  }

  initDOMListeners() {
    if (!this.listeners.length) return

    this.listeners.forEach(listener => {
      const method = this[getMethodName(listener)]
      if (!method) {
        const component = this.name
        throw new Error(`
          method ${getMethodName(listener)} is not implemented in ${component}
        `)
      }
      const callback = method.bind(this)
      this.$root.on(listener, callback)
    })
  }

  removeDOMListeners() {}
}

function getMethodName(eventName) {
  return `on${capitalize(eventName)}`
}
