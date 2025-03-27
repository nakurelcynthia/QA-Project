const isValidEmail = require("./emailValidator");
test("Valid Email Format",()=> {
expect(isValidEmail("tihitnaabraham@gmail.com")).toBe(true);});
