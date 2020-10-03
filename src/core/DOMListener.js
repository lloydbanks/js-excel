export default class DOMListener {
  constructor($root) {
    if (!$root && $root.$el) {
      throw new Error('Parent element is required for DOMListener!')
    }
    this.$root = $root.$el
    console.log('dom root', this.$root)
  }
}
