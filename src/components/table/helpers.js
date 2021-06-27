import { range } from '@core/utils'

export const KEY_ENTER = 'Enter'
export const KEY_TAB = 'Tab'
export const KEY_UP = 'ArrowUp'
export const KEY_RIGHT = 'ArrowRight'
export const KEY_DOWN = 'ArrowDown'
export const KEY_LEFT = 'ArrowLeft'

export function shouldResize($target) {
  return $target.data.resize
}

export function isCell($target) {
  return $target.data.col && $target.data.id
}

export function matrix($current, $target) {
  const current = $current.id(true)
  const target = $target.id(true)
  const cols = range(current.col, target.col)
  const rows = range(current.row, target.row)

  return cols.reduce((acc, col) => {
    rows.forEach(row => acc.push(`${row}:${col}`))
    return acc
  }, [])
}

export function nextSelector({ key, shiftKey }, { row, col }) {
  switch (key) {
    case KEY_ENTER:
      if (!shiftKey) row++
      break
    case KEY_DOWN:
      row++
      break
    case KEY_UP:
      row--
      break
    case KEY_RIGHT:
      col++
      break
    case KEY_LEFT:
      col--
      break
    case KEY_TAB:
      if (shiftKey) {
        col--
      } else {
        col++
      }
      break
  }

  return `[data-id="${row}:${col}"]`
}
