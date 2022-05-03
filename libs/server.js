const explorerController = require("./controllers/explorerController");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/",(request, response) => {
	response.json({message: "FizzBuzz API welcome 🖖!"});
});
//*endpoint 1
app.get("/v1/explorers/:mission",(request, response) => { //*? :mission query param
	const mission = request.params.mission;
	const explorerInMission = explorerController.getExplorersByMission(mission);
	response.json(explorerInMission);
});
//*endpoint 2
app.get("/v1/explorers/amount/:mission",(request, response) => {
	const mission = request.params.mission;
	const explorerInMission = explorerController.getExplorersAmonutByMission(mission);
	response.json({mission: mission, quantity: explorerInMission });
});
//*endpoint 3
app.get("/v1/explorers/usernames/:mission",(request, response) => {
	const mission = request.params.mission;
	const explorerInMission = explorerController.getExplrersUsernamesByMission(mission);
	response.json({mission: mission, explorers: explorerInMission});
});
//*endpoint request 4
app.get("/v1/explorers/fizzbuzz/:score",(request, response) => {
	const number = request.params.score;
	const numberRequest = explorerController.getValidationInNumber(number);
	response.json({score: number, trick: numberRequest});
});
//*Starting
let server = app.listen(port, () => {
	console.log(`FizzBuzz API in localhost: ${port}`);
});

let finish = () => {
	server.close();
};

module.exports = {app, finish};
