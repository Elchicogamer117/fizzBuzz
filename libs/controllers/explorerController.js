const reader = require("../utils/reader");
const explorerService = require("../services/explorerService");
const fizzBuzzService = require("../services/fizzBuzzService");
const isNumber = require("is-number");

const explorers = reader.readJsonFile("explorers.json");

class explorerController{
      
	static getExplorersByMission(mission){
		return explorerService.filterByMission(explorers, mission);
	}
	static getExplrersUsernamesByMission(mission){
		return explorerService.getExplorersUsernamesByMission(explorers, mission);
	}
	static getExplorersAmonutByMission(mission){
		return explorerService.getAmountOfExplorersByMission(explorers, mission);
	}
	static getValidationInNumber(number){
		return fizzBuzzService.applyValidationInNumber(number);
	}
	static getValidationBot(patch){
		console.log(isNumber(patch))
		console.log(typeof(patch))
		console.log(patch)
		if(!isNaN(patch)){
			const fizzbuzzTrick = fizzBuzzService.applyValidationInNumber(patch);
			return `Tu número es: ${patch} -> Validación: ${fizzbuzzTrick} 🤖`;
		} else if(patch == "node" || patch == "java"){
			const explorersByMission = explorerService.getExplorersUsernamesByMission(explorers, patch)
			return ` Explorers en ${patch}: ${JSON.stringify(explorersByMission)}`
		}
		else {
			return "❌ Envía un argumento válido❗"
		}
	}
}

module.exports = explorerController;
