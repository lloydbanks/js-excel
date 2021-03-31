import { ExcelComponent } from '@core/ExcelComponent'
import { createTable } from '@/components/table/template'
import resizeHandler from '@/components/table/resize';
import {shouldResize} from '@/components/table/helpers';

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

  onMousedown = e => {
    // eslint-disable-next-line no-invalid-this
    if (shouldResize(e)) resizeHandler(this.$root, e)
  }
}
