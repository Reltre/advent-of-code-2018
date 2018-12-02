const fs = require('fs');

export class FrequencyPtOne {
  rawData: string | undefined
  data: Array<number>;
  count: number;

  constructor() {
    this.rawData = fs.readFileSync('src/dayOne/input').toString();
    this.count = 0;
  }

  updateCount() {
    this.rawData.split("\n").forEach((numberString) => {
      this.count += Number(numberString);
    })
  }
}

// const f = new Frequency();
// f.updateCount();
// console.log(f.count);