//import reader from "./libs/utils/reader.js";
const explorerService = require('./libs/services/explorerService.js')
const reader = require('./libs/utils/reader.js')

const explorers = reader.readJsonFile("explorers.json") // esto regresa la lista de explorers del archivo
//console.log(explorers)


// Aplicación del ExplorerService sobre la lista de explorers
const expByMss = explorerService.filterByMission(explorers, 'node')
const countExpByMss = explorerService.getAmountOfExplorersByMission(explorers, 'node')
const userByMss = explorerService.getExplorersUsernamesByMission(explorers,'node')

console.log(expByMss)
console.log(countExpByMss)
console.log(userByMss)

