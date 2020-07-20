import { sumRow } from './board.utils'

test('SumRow', () => {
  expect(sumRow([2, 2, 2, 2])).toEqual([4, 4])
  expect(sumRow([2, 2, 4])).toEqual([4, 4])
  expect(sumRow([4, 4, 4, 4])).toEqual([8, 8])
  expect(sumRow([8, 2, 2])).toEqual([8, 4])
  expect(sumRow([2, 4, 8, 16])).toEqual([2, 4, 8, 16])
  expect(sumRow([2, 2, 4, 4])).toEqual([4, 8])
  expect(sumRow([])).toEqual([])
})
