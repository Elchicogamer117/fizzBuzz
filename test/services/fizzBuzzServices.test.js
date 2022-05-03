const reader = require("../../libs/utils/reader.js");
const fizzBuzzService = require("../../libs/services/fizzBuzzService");

const explorers = reader.readJsonFile("explorers.json");

describe("Test unit on fizzBuzzService ", () => {
	test("1) Score: \"Fizz\" to multiples of 3, \"Buzz\" to multiples of 5 and \"FizzBuzz\" to both", () => {

		const explorersFizzBuzz = explorers.map((explorer) => fizzBuzzService.applyValidationInExplorer(explorer));

		for(let explorer of explorersFizzBuzz){
			if(explorer.score % 3 === 0 && explorer.score % 5 !== 0){
				expect(explorer.trick).toBe("FIZZ");
			} else if(explorer.score % 5 === 0 && explorer.score % 3 !== 0){
				expect(explorer.trick).toBe("BUZZ");
			} else if(explorer.score % 5 === 0 && explorer.score % 3 === 0){
				expect(explorer.trick).toBe("FIZZBUZZ");
			}
		}
	});
});