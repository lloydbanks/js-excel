import DOMListener from '@core/DOMListener'

export class ExcelComponent extends DOMListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || this.constructor.name
    this.observer = options.observer
    this.unsubscribers = []

    this.prepare()
  }

  prepare() {}

  init() {
    this.initDOMListeners()
  }

  destroy() {
    this.removeDOMListeners()
    this.unsubscribers.forEach(fn => fn())
  }

  toHTML() {
    return ''
  }

  $emit(event, ...args) {
    const unsubscribe = this.observer.dispatch(event, ...args)
    this.unsubscribers.push(unsubscribe)
  }

  $on(event, fn) {
    this.observer.subscribe(event, fn)
  }
}
