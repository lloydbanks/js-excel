export class EventObserver {
  constructor() {
    this.observers = {}
  }

  dispatch(event, ...args) {
    const observers = this.observers[event]
    if (!Array.isArray(observers)) return

    observers.forEach(listener => listener(...args))
  }

  subscribe(event, fn) {
    this.observers[event] = this.observers[event] ?? []
    this.observers[event].push(fn)

    return () => {
      this.observers[event] = this.observers[event].filter(l => l !== fn)
    }
  }
}
