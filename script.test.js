const getPeople = require('./script')

test('calls swapi to get people witj a promise', () => {
    expect.assertions(2)
    return getPeople()
        .then(data => {
            expect(data.count).toEqual(82)
            expect(data.count).not.toEqual(42)
        })
})