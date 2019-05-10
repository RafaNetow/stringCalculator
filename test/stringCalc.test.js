const { sum, subtraction } = require('../src/Calculator');


test('adds 1 + 2 to equal 3', () => {
    const result = sum(1, 2)
    expect(result).toBe(3);
});

test('subtraction 3-3 to equal 0', () => {
    const result = subtraction(3, 3)
    expect(result).toBe(0);
})