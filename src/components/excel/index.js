import { $ } from '@core/dom'
import { EventObserver } from '@core/EventObserver';

export class Excel {
  constructor(selector, options) {
    this.$el = $(selector)
    this.components = options.components || []
    this.observer = new EventObserver()
  }

  getRoot() {
    const $root = $.create('div', 'excel')
    const componentOptions = { observer: this.observer }

    this.components = this.components.map(Component => {
      const $el = $.create('div', Component.className)
      const component = new Component($el, componentOptions)
      // debug
      if (component.name) window[`c${component.name}`] = component

      $el.html(component.toHTML())
      $root.append($el)

      return component
    })

    return $root
  }

  render() {
    this.$el.append(this.getRoot())
    this.components.forEach(component => component.init())
  }
}
