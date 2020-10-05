export default class DOMListener {
  constructor($root, listeners = []) {
    if (!$root && $root.$el) {
      throw new Error('Parent element is required for DOMListener!')
    }
    this.$root = $root.$el
    this.listeners = listeners
  }

  initDOMListeners() {
    console.log('listeners', this.listeners)
  }
  removeDOMListeners() {}
}
