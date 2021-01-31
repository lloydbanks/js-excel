import { ExcelComponent } from '@core/ExcelComponent'
import { createTable } from '@/components/table/template'
import {$} from '@core/dom';

export default class Table extends ExcelComponent {
  constructor($root) {
    super($root, {
      listeners: ['mousedown'],
    })
  }
  static className = 'excel__table'

  toHTML() {
    return createTable()
  }

  onMousedown = ({ target }) => {
    if (target.dataset.resize) {
      const $parent = $(target).closest('[data-type="resizable"]')
      const coords = $parent.getCoords()
      const { col } = $parent.data
      const cols = document.querySelectorAll(`[data-col="${col}"]`)

      document.onmousemove = e => {
        const delta = e.pageX - coords.right
        const width = coords.width + delta
        $parent.$el.style.width = `${width}px`
        cols.forEach(col => col.style.width = `${width}px`)
        console.log('mousemove')
      }

      document.onmouseup = () => document.onmousemove = null
    }
  }
}
