const { add, subtract, multiply,divide} = require("./math");


test('adds 4+1 to equal 5',()=>{
    expect(add(4,1)).toBe(5);
});

test('substracts 4-1 to equal 3',()=>{
    expect(subtract(4,1)).toBe(3);
});
 test('multiplys 4*1 to equal 4',()=>{
    expect(multiply(4,1)).toBe(4);
 });
 test('divides 4/2 to equal 2',()=>{
    expect(divide(4,2)).toBe(2);
 });