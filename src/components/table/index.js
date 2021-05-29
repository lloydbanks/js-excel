import { $ } from '@core/dom'
import { ExcelComponent } from '@core/ExcelComponent'
import { createTable } from '@/components/table/template'
import resizeHandler from '@/components/table/resize';
import { isCell, matrix, shouldResize } from '@/components/table/helpers'
import { TableSelection } from '@/components/table/selection'

export default class Table extends ExcelComponent {
  constructor($root) {
    super($root, {
      listeners: ['mousedown'],
    })
  }

  static className = 'excel__table'

  prepare() {
    this.selection = new TableSelection()
  }

  init() {
    super.init()

    const $firstCell = this.$root.find('[data-id="0:0"]')
    this.selection.select($firstCell)
  }

  toHTML() {
    return createTable()
  }

  onMousedown = (e) => {
    const $current = this.selection.$current
    const $target = $(e.target)

    if (shouldResize($target)) {
      resizeHandler(this.$root, $target)
    } else if (isCell($target)) {
      if (e.shiftKey) {
        const $cells = matrix($current, $target)
            .map(id => this.$root.find(`[data-id="${id}"]`))
        this.selection.selectGroup($cells)
      } else {
        this.selection.select($target)
      }
    }
  }
}
