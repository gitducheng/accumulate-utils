/**
 * 计算中英、字符数
 * @param str 
 */
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

/**
 * vue数据总线
 * @param Vue 
 */
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

/**
 * 生成随机整数
 * @param min
 * @param max
 */
function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}