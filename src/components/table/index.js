import { ExcelComponent } from '@core/ExcelComponent'
import { createTable } from '@/components/table/template'

export default class Table extends ExcelComponent {
  static className = 'excel__table'
  toHTML() {
    return createTable()
  }
}
