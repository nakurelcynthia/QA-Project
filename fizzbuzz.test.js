 const fizzbuzz = require("./fizzbuzz");


 test('returns "FizzBuzz" for multiples of 3 and 5',()=> {
   expect(fizzbuzz(15)).toBe("FizzBuzz");
  expect(fizzbuzz(45)).toBe("FizzBuzz");
    expect(fizzbuzz(30)).toBe("FizzBuzz");
 });

test('returns "Fizz" for multiples of 3',()=>{
    expect(fizzbuzz(6)).toBe("Fizz");
    expect(fizzbuzz(9)).toBe("Fizz");
});

test('returns "Buzz" for multiples of 5',()=>{
    expect(fizzbuzz(100)).toBe('Buzz');
});

test('returns number as a string if not a multiple of 3 or 5',()=>{
    expect(fizzbuzz(7)).toBe('7');
    expect(fizzbuzz(17)).toBe('17');
});