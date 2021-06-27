export class TableSelection {
  static className = 'selected'

  constructor() {
    this.group = []
    this.$current = null
  }

  empty() {
    this.group.forEach(item => item.removeClass(TableSelection.className))
    this.group = []
  }

  select($cell) {
    if (!$cell.$el) return

    this.$current = $cell
    this.empty()
    this.group.push($cell)
    this.focus()
  }

  focus() {
    this.$current.addClass(TableSelection.className).focus()
    return this
  }

  selectGroup($cells) {
    this.empty()
    this.group = $cells
    this.group.forEach($cell => $cell.addClass(TableSelection.className))
  }
}
