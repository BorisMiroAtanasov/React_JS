import * as calculator from "./calculator"


test('sum of positive number shoud be positive' , () =>{
    /// AAA - arange - подготвя данните 

    const first = 1; // може и let
    const second = 2
    const expectedResult = 3

    /// AAA - act - изпълнява 

    const actualResult = calculator.sum(first, second)


    /// AAA -  assert - вижда резултата да ли отговря на желания резултат

    expect(actualResult).toBe(expectedResult)

})

it('Shuoud  return negative number when adding , negative numbers' , () =>{
    expect(calculator.sum(-1, -2)).toBe(-3)
})