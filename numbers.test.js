const isEven = require("./numbers");

test('checks if a number is even', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(4)).toBe(true);
    expect(isEven(7)).toBe(false);
    expect(isEven(9)).toBe(false);
    expect(isEven(0)).toBe(true);
});




