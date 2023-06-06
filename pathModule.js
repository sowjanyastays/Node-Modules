const pathModule = require('path')

console.log(pathModule.sep)

const filePath = pathModule.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)

const baseName = pathModule.basename(filePath)
console.log(baseName)

const absolutePath = pathModule.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolutePath)