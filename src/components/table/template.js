import { CHAR_CODES } from '@core/consts'
import { fillArray, toChar } from '@core/utils'

const { A, Z } = CHAR_CODES

const createRow = data => {
  return `
    <div class="row">
        <div class="row-info"></div>
        <div class="row-data">${data}</div>
    </div>`
}
const createColumn = text => `<div class="column">${text}</div>`
const createCharColumn = (_, i) => createColumn(toChar(i + A))
const createCell = text => `<div class="cell" contenteditable>${text}</div>`
const createCellColumn = (_, i) => createCell(i + 1)

export function createTable(rowsCount = 10, colsCount = Z - A) {
  const rows = []

  const cols = fillArray(colsCount, createCharColumn).join('')
  rows.push(createRow(cols))

  const cells = fillArray(colsCount, createCellColumn).join('')
  rows.push(createRow(cells))

  return rows.join('')
}
