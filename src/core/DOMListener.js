export default class DOMListener {
  constructor($root) {
    if (!$root) throw new Error('Parent element is required for DOMListener!')
    this.$root = $root
    console.log('dom root', this.$root)
  }
}
