import { ExcelComponent } from '@core/ExcelComponent'
import { createTable } from '@/components/table/template'

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

  onMousedown(event) {
    console.log('mousedown...', event.target.dataset)
  }
}
