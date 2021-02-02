class DOM {
  constructor(selector) {
    this.$el =
      typeof selector === 'string' ? document.querySelector(selector) : selector
  }

  html(html) {
    const { $el } = this
    if (typeof html === 'string') {
      $el.innerHTML = html
      return this
    }

    return $el.outerHTML.trim()
  }

  append(node) {
    if (node instanceof DOM) node = node.$el

    if (Element.prototype.append) {
      this.$el.append(node)
    } else {
      this.$el.appendChild(node)
    }
    return this
  }

  closest(selector) {
    return $(this.$el.closest(selector))
  }

  getCoords() {
    return this.$el.getBoundingClientRect()
  }

  get data() {
    return this.$el.dataset
  }

  findAll(selector) {
    return this.$el.querySelectorAll(selector)
  }

  css(style) {
    return Object.assign(this.$el.style, style);
  }

  on(eventType, cb) {
    this.$el.addEventListener(eventType, cb)
  }

  off(eventType, cb) {
    this.$el.removeEventListener(eventType, cb)
  }

  clear() {
    this.html('')
    return this
  }
}

export function $(selector) {
  return new DOM(selector)
}

$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName)
  if (classes) el.classList.add(classes)
  return $(el)
}
