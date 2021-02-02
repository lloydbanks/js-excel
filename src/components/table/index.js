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

  columnResize = ($parent, coords) => {
    const { col } = $parent.data
    const $cols = this.$root.findAll(`[data-col="${col}"]`)

    document.onmousemove = e => {
      const delta = e.pageX - coords.right
      const width = coords.width + delta

      $parent.$el.style.width = `${width}px`
      $cols.forEach(col => col.style.width = `${width}px`)
    }
  }

  rowResize = ($parent, coords) => {
    document.onmousemove = e => {
      const deltaY = e.pageY - coords.bottom
      const height = coords.height + deltaY

      $parent.$el.style.height = `${height}px`
    }
  }

  onMousedown = ({ target }) => {
    if (target.dataset.resize) {
      const type = $(target).data.resize
      const methodName = `${type}Resize`
      const $parent = $(target).closest('[data-type="resizable"]')
      const coords = $parent.getCoords()

      this[methodName]($parent, coords)

      document.onmouseup = () => document.onmousemove = null
    }
  }
}
