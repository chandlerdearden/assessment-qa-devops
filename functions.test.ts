const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    const testArr = [1,5,3]
    
    test('returns an array', () => {
        expect(shuffleArray(testArr)).toStrictEqual(expect.arrayContaining(testArr))
    }),

    test('returns same length as the argument sent in', () => {
        expect(shuffleArray(testArr).length).toBe(3)

    })

})