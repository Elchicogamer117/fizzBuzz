//import reader from "./libs/utils/reader.js";
const reader = require("./libs/utils/reader.js");
const explorerService = require("./libs/services/explorerService.js");
const fizzBuzzService = require("./libs/services/fizzBuzzService");

const explorers = reader.readJsonFile("explorers.json"); // esto regresa la lista de explorers del archivo
//console.log(explorers)

// Aplicación del ExplorerService sobre la lista de explorers
const expByMss = explorerService.filterByMission(explorers, "node");
const countExpByMss = explorerService.getAmountOfExplorersByMission(explorers, "node");
const userByMss = explorerService.getExplorersUsernamesByMission(explorers,"node");

console.log(expByMss);
console.log(countExpByMss);
console.log(userByMss);

//*Validacioens
const explorer1 = {name: "Explorer1", score: 1};
fizzBuzzService.applyValidationInExplorer(explorer1); // {name: "Explorer1", score: 1, trick: 1} 

const explorer3 = {name: "Explorer3", score: 3};
fizzBuzzService.applyValidationInExplorer(explorer3); // {name: "Explorer3", score: 3, trick: "FIZZ"}

const explorer5 = {name: "Explorer5", score: 5};
fizzBuzzService.applyValidationInExplorer(explorer5); // {name: "Explorer5", score: 5, trick: "BUZZ"}

const explorer15 = {name: "Explorer15", score: 15};
fizzBuzzService.applyValidationInExplorer(explorer15); // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}

console.log(explorer1);
console.log(explorer3);
console.log(explorer5);
console.log(explorer15);
