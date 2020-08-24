// 计算中英、字符数
function countStringLength(str) {
  let zhLength = 0
  let enLength = 0
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 127 || str.charCodeAt(i) === 94) {
      zhLength++
    } else {
      enLength++
    }
  }
  return { zhLength, enLength }
}

// vue数据总线
function VueBus(Vue) {
  const bus = new Vue()

  Object.defineProperties(bus, {
    on: {
      get() {
        return this.$on.bind(this)
      }
    },
    once: {
      get() {
        return this.$once.bind(this)
      }
    },
    off: {
      get() {
        return this.$off.bind(this)
      }
    },
    emit: {
      get() {
        return this.$emit.bind(this)
      }
    }
  })

  Object.defineProperty(Vue, 'bus', {
    get() {
      return bus
    }
  })

  Object.defineProperty(Vue.prototype, '$bus', {
    get() {
      return bus
    }
  })
}
