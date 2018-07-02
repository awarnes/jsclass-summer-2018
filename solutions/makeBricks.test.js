/* globals test expect */
const makeBricks = require('./makeBricks')

test('tests small=3 large=1, total=8', () => {
  expect(makeBricks(3, 1, 8)).toBe(true)
})

test('tests small=3 large=1, total=9', () => {
  expect(makeBricks(3, 1, 9)).toBe(false)
})

test('tests small=3 large=2, total=10', () => {
  expect(makeBricks(3, 2, 10)).toBe(true)
})
