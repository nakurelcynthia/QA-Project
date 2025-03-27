const reverseString = require("./stringUtils");
test('reverse a string',() =>{
    expect(reverseString('mavericks')).toBe('skcirevam');
    expect(reverseString('')).toBe('');
    expect(reverseString('m')).toBe('m');
    expect(reverseString('123xc')).toBe('cx321');
});