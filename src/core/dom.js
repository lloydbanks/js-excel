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