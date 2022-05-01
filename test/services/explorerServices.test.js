const explorerService = require('../../libs/services/explorerService')
const reader = require('../../libs/utils/reader.js')

const explorers = reader.readJsonFile("explorers.json")

describe("Test for explorer service", () => {
      test('1) Get the quantity of explorers names in node', () => {
            const expByMss = explorerService.filterByMission(explorers, 'node')
            expect(expByMss.length).toBe(10);
      });

      test('2) Get the quantity of explorers in node', () => {
            const countExpByMss = explorerService.getAmountOfExplorersByMission(explorers, 'node')
            expect(countExpByMss).toBe(10);
      });

      test("3) Get the explorer's usernames in Node", () => {
            const userByMss = explorerService.getExplorersUsernamesByMission(explorers,'node')
            expect(userByMss.length).toBe(10);
      });

  });