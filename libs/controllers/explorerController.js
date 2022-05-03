const reader = require("../utils/reader");
const explorerService = require("../services/explorerService");
const fizzBuzzService = require("../services/fizzBuzzService");

const explorers = reader.readJsonFile("explorers.json");

class explorerController{
      
	static getExplorersByMission(mission){
		//const explorers = reader.readJsonFile("explorers.json")
		return explorerService.filterByMission(explorers, mission);
	}
	static getExplrersUsernamesByMission(mission){
		//const explorers = reader.readJsonFile("explorers.json")
		return explorerService.getExplorersUsernamesByMission(explorers, mission);
	}
	static getExplorersAmonutByMission(mission){
		//const explorers = reader.readJsonFile("explorers.json")
		return explorerService.getAmountOfExplorersByMission(explorers, mission);
	}
	static getValidationInNumber(number){
		return fizzBuzzService.applyValidationInNumber(number);
	}
}

module.exports = explorerController;
