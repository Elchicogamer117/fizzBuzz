const fs = require("fs");

const rawdata = fs.readFileSync("explorers.json"); 
const explorers = JSON.parse(rawdata);
const explorersInNode = explorers.filter((explorer) => explorer.mission == "node");

describe("Test unit on app.js ", () => {
      test('1) Get the quantity of explorers names in node', () => {

            expect(explorersInNode.length).toBe(10);
      });

      test("2) Get the explorer's usernames in Node", () => {
            
            const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == "node");
            const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);

            expect(usernamesInNode.length).toBe(10);
      });

      test("3) Get a new list of explorers in node, if the score numbers is divisible by 3, I need a new propery called trick, and the value assigned is FIZZ, if not the value should be the score itself.", () => {
            
            const assignFizzTrick = function(explorer){
                  if(explorer.score % 3 === 0){ 
                        explorer.trick = "FIZZ";
                        return explorer;
                  }else{
                        explorer.trick = explorer.score;
                        return explorer;
                  }
            };
            
            const explorersInNodeAndFizzTrick = explorersInNode.map((explorer) => assignFizzTrick(explorer));

            for(let explorer of explorersInNodeAndFizzTrick){
                  if(explorer.score % 3 === 0){
                        expect(explorer.trick).toBe('FIZZ')
                  }
            };
      });

      test("4) Get a new list of explorers in node if the score number is divisible by 5, we need to set a new property called trick and set the value BUZZ, if not this value should be just the score", () => {
            
            const assignBuzzTrick = function(explorer){
                  if(explorer.score%5 === 0){
                        explorer.trick = "BUZZ";
                        return explorer;
                  }else{
                        explorer.trick = explorer.score;
                        return explorer;
                  }
            };
            
            const explorersInNodeAndBuzzTrick = explorersInNode.map((explorer) => assignBuzzTrick(explorer));

            for(let explorer of explorersInNodeAndBuzzTrick){
                  if(explorer.score % 5 === 0){
                        expect(explorer.trick).toBe('BUZZ')
                  }
            };
      });

      test("5) Get a new list of explorers in node if the score number is divisible by 5, we need to set a new property called trick and set the value BUZZ, if not this value should be just the score", () => {
            
            const assignFizzBuzzTrick = function(explorer){
                  if(explorer.score % 5 === 0 && explorer.score%3 === 0){
                        explorer.trick = "FIZZBUZZ";
                        return explorer;
                  }else{
                        explorer.trick = explorer.score;
                        return explorer;
                  }
            };
            
            const explorersInNodeAndFizzBuzzTrick = explorersInNode.map((explorer) => assignFizzBuzzTrick(explorer));

            for(let explorer of explorersInNodeAndFizzBuzzTrick){
                  if(explorer.score % 5 === 0 && explorer.score%3 === 0){
                        expect(explorer.trick).toBe('FIZZBUZZ')
                  }
            };
      });
})

