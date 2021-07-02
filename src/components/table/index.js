import { $ } from '@core/dom'
import { ExcelComponent } from '@core/ExcelComponent'
import { createTable } from '@/components/table/template'
import resizeHandler from '@/components/table/resize';
import {
  isCell,
  matrix, nextSelector,
  shouldResize,
  KEY_DOWN, KEY_ENTER, KEY_LEFT, KEY_RIGHT, KEY_TAB, KEY_UP
} from '@/components/table/helpers'
import { TableSelection } from '@/components/table/selection'

export default class Table extends ExcelComponent {
  constructor($root, options) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown', 'keydown'],
      ...options
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

    this.observer.subscribe('formula', text => {
      this.selection.$current.text(text)
    })
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

  onKeydown = (e) => {
    const keys = [KEY_TAB, KEY_ENTER, KEY_UP, KEY_RIGHT, KEY_DOWN, KEY_LEFT]
    if (!keys.includes(e.key)) return

    e.preventDefault()

    const $current = this.selection.$current
    const selector = nextSelector(e, $current.id(true))
    const $next = this.$root.find(selector)
    this.selection.select($next)
  }
}
