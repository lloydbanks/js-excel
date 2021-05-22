export class TableSelection {
  static className = 'selected'

  constructor() {
    this.group = []
  }

  empty() {
    this.group.forEach(item => item.removeClass(TableSelection.className))
    this.group = []
  }

  select($el) {
    this.empty()
    this.group.push($el)
    $el.addClass(TableSelection.className)
  }

  selectGroup() {}
}
