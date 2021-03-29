import { ExcelComponent } from '@core/ExcelComponent'
import { createTable } from '@/components/table/template'
import { $ } from '@core/dom'

const COL = 'column'

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

  onMousedown = ({ target }) => {
    if (target.dataset.resize) {
      const $resizer = $(target)
      const $parent = $resizer.closest('[data-type="resizable"]')
      const coords = $parent.getCoords()
      const type = $resizer.data.resize
      const sideProp = type === COL ? 'bottom' : 'right'
      let value

      $resizer.css({
        opacity: 1,
        [sideProp]: '-500px'
      })

      document.onmousemove = e => {
        if (type === COL) {
          const delta = e.pageX - coords.right
          value = coords.width + delta
          $resizer.css({ right: -delta + 'px' })
        } else {
          const delta = e.pageY - coords.bottom
          value = coords.height + delta
          $resizer.css({ bottom: -delta + 'px' })
        }
      }

      document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null

        if (type === COL) {
          $parent.css({ width: value + 'px' })
          // eslint-disable-next-line no-invalid-this
          this.$root.findAll(`[data-col="${$parent.data.col}"]`)
              .forEach(el => el.style.width = value + 'px')
        } else {
          $parent.css({ height: value + 'px' })
        }

        $resizer.css({
          opacity: 0,
          bottom: 0,
          right: 0
        })
      }
    }
  }
}
