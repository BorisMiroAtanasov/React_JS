import * as calculator from "./calculator"

describe('calculator sum', () => {

    test('sum of positive number shoud be positive', () => {
        /// AAA - arange - подготвя данните 

        const first = 1; // може и let
        const second = 2
        const expectedResult = 3

        /// AAA - act - изпълнява 
        const actualResult = calculator.sum(first, second)

        /// AAA -  assert - вижда резултата да ли отговря на желания резултат

        expect(actualResult).toBe(expectedResult)

    })
    // добре е да имаме негативен "case" в случая е трудно да се направи такъв за грешка с калколатора
    // test('sum of positive number shoud return error', () => {

    //     const first = 1; // може и let
    //     const second = 2
    //     const expectedResult = 3

    //     const actualResult = calculator.sum(first, second)

    //     expect(actualResult).toBe(expectedResult)

    // })

    it('Shuoud  return negative number when adding , negative numbers', () => { // може да сложим "only" - изпълняваме само този тест
        expect(calculator.sum(-1, -2)).toBe(-3)
    })
    test('Use undefinde as an argument', () => { 
        expect(calculator.sum(undefined, 1)).toBe(NaN)
    })
    test('use string as an argument', () => { 
        expect(calculator.sum('1', 2)).toBe(3)
    })


})


describe('calculator divide', () => {

    test('Shoud throw error when divide by zero', () => { 
        expect(()=> calculator.divide(2,0)).toThrow('Devision by zero is not permited')
    })

})