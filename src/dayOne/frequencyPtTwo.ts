const fs = require('fs');

export class FrequencyPtTwo {
  rawData: string | undefined
  data: Array<number>;
  count: number;
  history: Array<number>;

  constructor() {
    this.rawData = fs.readFileSync('src/dayOne/input').toString();
    this.count = 0;
    this.postInitialize();
    this.history = [];
  }

  postInitialize() {
    this.data = this.rawData.split('\n').map( string => Number(string));
  }

  calibrate(): number | undefined {
    let currentNumber = 0;
    let frequencyExists = false;
    const counter = this.nextData();

    while(true) {
      currentNumber = counter.next().value;
      this.count += currentNumber;
      frequencyExists = this.checkHistory();
      if(frequencyExists) return this.count;
      this.addToHistory();
    }
  }

  checkHistory() {
    return !!this.history.find((currentValue) => currentValue == this.count)
  }

  addToHistory() {
    this.history.push(this.count);
  }

  *nextData():IterableIterator<number> {
    let count = 0;
    while(true) {
      yield this.data[count % this.data.length];
      count += 1;
    }
  }
}