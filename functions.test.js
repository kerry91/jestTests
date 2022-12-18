const functions = require ('./functions')
/* 
MATCHERS
toBeNull
toBeUndefined
toBeDefined
toBeTruthy
toBeFalsy
*/


/*
test('is defined', () => {
    expect(functions.getAge("Rudi", 35)).toBeDefined()
})

test('2 + 2 is equal to 4', () => {
    expect(functions.add(2 , 2)).toBe(4)
})

test('object assignmnet', () => {
    const data = {one: 1};
    data['two'] = 2
    expect(data).toBe({one: 1, two: 2})
})

test('object assignmnet', () => {
    const data = {one: 1};
    data['two'] = 2
    expect(data).not.toEqual({one: 1, two: 2})
})

test('object assignmnet', () => {
    const data = {one: 1};
    data['two'] = 2
    expect(data).toEqual({one: 1, two: 2})
})

test('test isNull', () => {
    expect(functions.isNull()).toBeFalsy()
})

test('test isUndefined', () => {
    expect(functions.isUndefined()).toBeUndefined()
})

test('zero', () => {
    const z = 0
    expect(z).not.toBeNull()
    expect(z).toBeDefined()
    expect(z).not.toBeTruthy()
    expect(z).toBeFalsy()
})


test('two plus two', () => {
    const value = 2 + 2
    expect(value).toBeGreaterThan(3)
    expect(value).toBeGreaterThanOrEqual(3.5)
    expect(value).toBeLessThan(5)
    expect(value).toBeLessThanOrEqual(4.5)
    expect(value).toBe(4)
    expect(value).toEqual(4)
})


test('adding floating point numbers', () => {
    const value = 0.1 + 0.2
    expect(value).toBeCloseTo(0.3)
})

test('there is no I in team', () => {
    expect('team').not.toMatch(/I/)
})


test('the shopping list has wine on it', () => {
    const shoppingList = [
        'soup',
        'hand wash',
        'bin bags',
        'wine'
    ]
    expect(shoppingList).toContain('wine')
    expect(new Set(shoppingList)).toContain('wine')
}) 

*/

test('compiling androind goes as exxpected', () => {
    expect(functions.compileAndroidCode).toThrow()
    expect(functions.compileAndroidCode).toThrow(/JDK/)
})