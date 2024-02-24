const shuffle = require("../src/shuffle");


describe("shuffle should...", () => {
  // CODE HERE
  const array = [3,4,5,6,7]
  const result = shuffle(array)
  // does the function shuffle return an array
  test('does the shuffle function return an array', () => {
    expect(Array.isArray(result)).toBe(true)
  }),
  // length returned is the same as length of arr passed
  test("length of the parameter should be the same as a returned array", ()=>{
    expect(result.length).toBe(array.length)
  })
  //

});
