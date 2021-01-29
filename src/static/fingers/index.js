const leftHand = require.context('./leftHand', true, /\.js$/)
const rightHand = require.context('./rightHand', true, /\.js$/)

const leftHandKeys = leftHand.keys().reduce((leftHandKeys, modulePath) => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
    const value = leftHand(modulePath)
    leftHandKeys[moduleName] = value.default
    return leftHandKeys
}, {})


const rightHandKeys = rightHand.keys().reduce((rightHandKeys, modulePath) => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
    const value = rightHand(modulePath)
    rightHandKeys[moduleName] = value.default
    return rightHandKeys
}, {})

export default {
    leftHandKeys,
    rightHandKeys
}