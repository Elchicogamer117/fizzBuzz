const explorerController = require('../libs/controllers/explorerController');

describe("Test for bot in explorerController", () =>{
	test("1) node list", () => { 
		const nodeList = explorerController.getValidationBot('node')
		expect(nodeList.split(",")).toHaveLength(10);
	});
      test("2) java list", () => { 
            const javaList = explorerController.getValidationBot('java')
		expect(javaList.split(",")).toHaveLength(5);
	});
});