const explorerController = require('./controllers/explorerController');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json())

app.get('/',(request, response) => {
      response.json({message: "FizzBuzz API welcome 🖖!"})
});

app.get('/v1/explorers/:mission',(request, response) => { 
      const mission = request.params.mission
      const explorerInMission = explorerController.getExplorersByMission(mission)
      response.json(explorerInMission)
});

app.listen(port, () => {
      console.log(`FizzBuzz API in localhost: ${port}`)
});