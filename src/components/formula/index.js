import { ExcelComponent } from '@core/ExcelComponent'
import { KEY_ENTER } from '@/components/table/helpers';
import { $ } from '@core/dom';

export default class Formula extends ExcelComponent {
  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'keydown'],
      ...options
    })
  }

  static className = 'excel__formula'

  toHTML() {
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    `
  }

  onInput = e => {
    this.$emit('formula:input', $(e.target).text())
  }

  onKeydown = e => {
    if (e.key === KEY_ENTER) {
      e.preventDefault()
      this.$emit('formula:done')
    }
  }
}
