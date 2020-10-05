import { ExcelComponent } from '@core/ExcelComponent'

export default class Formula extends ExcelComponent {
  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input'],
    })
  }

  static className = 'excel__formula'

  toHTML() {
    return `
      <div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>
    `
  }

  onInput(e) {
    console.log('formula onInput...', e)
  }
}
