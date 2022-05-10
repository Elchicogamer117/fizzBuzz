const explorerController = require("../../libs/controllers/explorerController");

describe("Test for explorer controller", () => {
	test("1) Get the quantity of explorers names in node", () => {
		const expByMssNode = explorerController.getExplorersByMission("node");
		for(let explorer of expByMssNode){
			expect(explorer.mission).toBe("node");
		}
	});

	test("2) Get the explorer's usernames in Node", () => {
		const expByMssNode = explorerController.getExplorersByMission("node");
		for(let explorer of expByMssNode){
			expect(explorer.mission).toBe("node");
			expect(explorer.name).not.toBeUndefined();
		}
	});

	test("3) Get the quantity of explorers in node", () => {
		const expByMssNode = explorerController.getExplorersAmonutByMission("node");
		expect(expByMssNode).toBe(10);
	});
});
