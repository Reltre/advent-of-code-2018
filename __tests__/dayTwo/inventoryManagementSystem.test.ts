import InventorySystem from '../../src/dayTwo/inventoryManagementSystem'
import { notDeepEqual } from 'assert';

namespace InventoryManagementSystemTestsPtOne {
  test('reads in an input file', () => {
    const inventory = new InventorySystem()
    expect(typeof inventory.data).toBe('string');
  })

  test('keeps a count of IDs with pairs', () => {
    const inventory = new InventorySystem()
    expect(inventory.doubleCount).not.toBe(undefined);
  })

  test('keeps a count of IDs with triple values', () => {
    const inventory = new InventorySystem()
    expect(inventory.tripleCount).not.toBe(undefined);
  })

  test('computes a checksum', () => {
    const inventory = new InventorySystem();
    inventory.computeCheckSum();
    expect(inventory.doubleCount).toBeGreaterThan(0);
    expect(inventory.tripleCount).toBeGreaterThan(0);
    expect(inventory.checkSum)
      .toEqual(inventory.doubleCount * inventory.tripleCount);
  })

  test('finds ids that differ by one character', () => {
    const inventory = new InventorySystem();
    inventory.data = "fghij\nfguij"
    expect(inventory.commonIdValues()).toEqual('fgij')
  })
}

namespace InventoryManagementSystemTestsPtTwo {
  
}