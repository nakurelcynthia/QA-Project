const reverseString = require("./stringUtils");

test('reverse a string',() =>{
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('')).toBe('');
    expect(reverseString('a')).toBe('a');
    
});