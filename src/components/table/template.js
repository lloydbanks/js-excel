import { CHAR_CODES } from '@core/consts'
import { fillArray, toChar } from '@core/utils'

const { A, Z } = CHAR_CODES

const createRow = (data, i = '') => {
  const resizer = i ? '<div class="row-resize" data-resize="row"></div>' : ''

  return `
    <div class="row">
        <div class="row-info">
            ${i}
            ${resizer}
        </div>
        <div class="row-data">${data}</div>
    </div>`
}
const createColumn = (v, i) => `
    <div class="column" data-type="resizable" data-col="${i}">
        ${v}
        <div class="column-resize" data-resize="column"></div>
    </div>
`
const createCharColumn = (_, i) => createColumn(toChar(i + A), i)
const createCell = (v = '', i) =>
  `<div class="cell" contenteditable data-col=${i}>${v}</div>`
const createCellColumn = (_, i) => createCell('', i)

export function createTable(rowsCount = 10, colsCount = Z - A) {
  const rows = []

  const cols = fillArray(colsCount, createCharColumn).join('')
  rows.push(createRow(cols))

  for (let i = 1; i <= rowsCount; i++) {
    const cells = fillArray(colsCount, createCellColumn).join('')
    rows.push(createRow(cells, i))
  }

  return rows.join('')
}
