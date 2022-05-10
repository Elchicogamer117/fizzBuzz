const reader = require("../../libs/utils/reader");

describe("Test for reader.js", () => {
	test("1) Read json file", () => {
		const explorers = reader.readJsonFile("explorers.json");
		expect(explorers.length).toBe(15);
	});

});