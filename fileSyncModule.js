const {readFileSync ,writeFileSync } = require('fs')
console.log('Start')

const firstFile = readFileSync('./FSModuleFiles/firstFile.txt','utf-8')
console.log(firstFile);