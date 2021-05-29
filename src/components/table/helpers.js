import { range } from '@core/utils';

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
