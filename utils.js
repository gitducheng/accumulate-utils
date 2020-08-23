// 计算中英、字符数
countStringLength(str) {
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