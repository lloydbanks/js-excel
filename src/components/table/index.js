import {ExcelComponent} from '@core/ExcelComponent';

export default class Table extends ExcelComponent {
  toHTML() {
    return '<h2>Header</h2>'
  }
}
