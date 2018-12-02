import { FrequencyPtOne } from '../../src/dayOne/frequencyPtOne';
import { FrequencyPtTwo } from '../../src/dayOne/frequencyPtTwo';

namespace FrequencyPartOneTests {
  test('it reads in an input file', () => {
    const frequency = new FrequencyPtOne();
    expect(frequency.data).not.toBeUndefined;
  });

  test('it keeps a running count of the frequency', () => {
    const frequency = new FrequencyPtOne();
    expect(typeof frequency.count).toEqual('number');
  });

  test('it updates count with data read in from input', () => {
    const frequency = new FrequencyPtOne();
    frequency.updateCount();
    expect(frequency.count).not.toEqual(0);
  })

  test('computes the frequency', () => {
    const frequency = new FrequencyPtOne();
    frequency.updateCount();
    expect(frequency.count).toEqual(500);
  })
}

namespace FrequencyPartTwoTests {
  test('it formats data as an array', () => {
    const frequency = new FrequencyPtTwo();
    expect((frequency.data instanceof Array)).toBe(true);
  })

  test('it keeps a record of past frequencies', () => {
    const frequency = new FrequencyPtTwo();
    frequency.data = [3, 3, 4, -2, -4];
    frequency.calibrate();
    expect(frequency.history).not.toEqual([]);
  })

  test('it calibrates the frequency based on duplicate values', () => {
    const frequency = new FrequencyPtTwo();
    frequency.data = [3, 3, 4, -2, -4];
    frequency.calibrate();
    expect(frequency.count).toEqual(10);
  }) 
}