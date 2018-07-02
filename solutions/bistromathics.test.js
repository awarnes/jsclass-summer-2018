/* globals test expect */
const {receipt, splitTheBill} = require('./bistromathics')

test('adding up the bill and applying 20%', () => {
  expect(receipt([10, 9, 25], 20)).toBe('$56.76')
})

test('applying standard tax, tip to total', () => {
  expect(receipt(20)).toBe('$24.80')
})

test('Splits the bill between three people', () => {
  const output = splitTheBill(122.27, ['Victoria', 'Joseph', 'Jessie'])
  const expected = [
    'Victoria owes $40.76',
    'Joseph owes $40.76',
    'Jessie owes $40.75'
  ]
  expect(expected).toEqual(output)
})
