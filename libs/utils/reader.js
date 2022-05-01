import fs from "fs";

export default class reader{
      
      static readJsonFile(patch){
            const rawdata = fs.readFileSync(patch)
            return JSON.parse(rawdata)
      }
}
