const loneSum = require('./loneSum')

/* global it expect */

it('lone_sum(1, 2, 3) → 6', () => {
  expect(loneSum(1, 2, 3)).toEqual(6)
})

it('lone_sum(3, 2, 3) → 2', () => {
  expect(loneSum(3, 2, 3)).toEqual(2)
})

it('lone_sum(3, 3, 3) → 0', () => {
  expect(loneSum(3, 3, 3)).toEqual(0)
})
