const fs = require("fs");

const rawdata = fs.readFileSync("explorers.json"); 
const explorers = JSON.parse(rawdata);
const explorersInNode = explorers.filter((explorer) => explorer.mission == "node");

describe("Test unit on app.js ", () => {
      
})

