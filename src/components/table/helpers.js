export function shouldResize($target) {
  return $target.data.resize
}

export function isCell($target) {
  return $target.data.col && $target.data.id
}
