import { CHAR_CODES } from '@core/consts'
import { fillArray, toChar } from '@core/utils'

const { A, Z } = CHAR_CODES

const createRow = (data, i = '') => {
  return `
    <div class="row">
        <div class="row-info">${i}</div>
        <div class="row-data">${data}</div>
    </div>`
}
const createColumn = v => `<div class="column">${v}</div>`
const createCharColumn = (_, i) => createColumn(toChar(i + A))
const createCell = (v = '') => `<div class="cell" contenteditable>${v}</div>`
const createCellColumn = () => createCell()

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
