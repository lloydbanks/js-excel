import { $ } from '@core/dom'
import { ExcelComponent } from '@core/ExcelComponent'
import { createTable } from '@/components/table/template'
import resizeHandler from '@/components/table/resize';
import { isCell, shouldResize } from '@/components/table/helpers';
import { TableSelection } from '@/components/table/selection';

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

    const $firstCell = this.$root.find('[data-id="1:2"]')
    this.selection.select($firstCell)
  }

  toHTML() {
    return createTable()
  }

  onMousedown = ({ target }) => {
    const $target = $(target)

    if (shouldResize($target)) {
      resizeHandler(this.$root, $target)
    } else if (isCell($target)) {
      this.selection.select($target)
    }
  }
}
