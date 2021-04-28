import { CHAR_CODES } from '@core/consts'
import { fillArray, toChar } from '@core/utils'

const { A, Z } = CHAR_CODES

const createRow = (data, i = '') => {
  const resizer = i ? '<div class="row-resize" data-resize="row"></div>' : ''

  return `
    <div class="row" data-type="resizable" data-row="${i}">
        <div class="row-info">
            ${i}
            ${resizer}
        </div>
        <div class="row-data" data-row=${i}>${data}</div>
    </div>`
}
const createColumn = (v, i) => `
    <div class="column" data-type="resizable" data-col="${i}">
        ${v}
        <div class="column-resize" data-resize="column"></div>
    </div>
`
const createCharColumn = (_, i) => createColumn(toChar(i + A), i)
const createCell = (col, row, v = '') =>
  `<div class="cell" contenteditable data-col=${col} data-id="${row}:${col}">${v}</div>`
const createCellColumn = row => (_, col) => createCell(col, row)

export function createTable(rowsCount = 10, colsCount = Z - A) {
  const rows = []

  const cols = fillArray(colsCount, createCharColumn).join('')
  rows.push(createRow(cols))

  for (let row = 0; row <= rowsCount; row++) {
    const cells = fillArray(colsCount, createCellColumn(row)).join('')
    rows.push(createRow(cells, row + 1))
  }

  return rows.join('')
}
