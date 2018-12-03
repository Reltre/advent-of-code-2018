const fs = require('fs');
export default class InventorySystem {
  data: string | undefined;
  doubleCount: number | undefined;
  tripleCount: number | undefined;
  checkSum: number | undefined;

  constructor() {
    this.data = fs.readFileSync('src/dayTwo/input').toString();
    this.doubleCount = 0;
    this.tripleCount = 0;
  }

  computeCheckSum() {
    this.data.split("\n").forEach((id) => {
      const double = this.findCountOf(id, 2);
      const triple = this.findCountOf(id, 3);
      if(double) this.doubleCount += 1 
      if(triple) this.tripleCount += 1
    });
    this.checkSum = Number(this.doubleCount) * Number(this.tripleCount);
  }

  findCountOf(id, number) {
    let match = null;
    for(let char of id) {
      match = id.match(new RegExp(char, 'g'));
      if (match.length === number) return match[0];
    }
    return undefined;
  }

  commonIdValues() {
    const entries = this.data.split("\n");
    let differentCharacterIndex = -1;
    let commonCharacters = '';
    entries.forEach((outerId) => {
      entries.slice(1).forEach((innerId) => {
        differentCharacterIndex = 
          this.findDifferentCharacterIndex(innerId, outerId);
        if(differentCharacterIndex) {
          commonCharacters = innerId
            .slice(0, differentCharacterIndex)
            .concat(innerId.slice(differentCharacterIndex + 1));
        }
      })
    });
    return commonCharacters;
  }

  findDifferentCharacterIndex(idOne, idTwo) {
    let differenceCount = 0;
    let differentCharacterIndex = NaN;
    for(let index = 0; index < idOne.length; index += 1) {
      if(idOne[index] !== idTwo[index]) {
        differenceCount += 1;
      }
      if(differenceCount > 1) {
        differentCharacterIndex = NaN;
        break;
      }
      if(differenceCount == 1 && !differentCharacterIndex) {
        differentCharacterIndex = index;
      }
    }
    return differentCharacterIndex;
  }
}