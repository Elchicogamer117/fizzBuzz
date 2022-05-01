import reader from "./libs/utils/reader.js";

const explorers = reader.readJsonFile("explorers.json"); // esto regresa la lista de explorers del archivo

console.log(explorers)