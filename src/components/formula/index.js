import { ExcelComponent } from '@core/ExcelComponent'

export default class Formula extends ExcelComponent {
  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click'],
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
    console.log(this, e.target.textContent.trim())
  }

  onClick(e) {
    console.log('onClick method')
  }
}
