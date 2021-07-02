import DOMListener from '@core/DOMListener'

export class ExcelComponent extends DOMListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || this.constructor.name
    this.observer = options.observer

    this.prepare()
  }

  prepare() {}

  init() {
    this.initDOMListeners()
  }

  destroy() {
    this.removeDOMListeners()
  }

  toHTML() {
    return ''
  }
}
