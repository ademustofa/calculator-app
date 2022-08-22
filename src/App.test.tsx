import { render, screen } from '@testing-library/react';

test('test 2 nilai perkalian', () => {
  const val = 2 * 2
  expect(val).toBe(4);
})

test('test 2 nilai penambahan', () => {
  const val = 2 + 3
  expect(val).toBe(5);
})

test('test 2 nilai pengurangan', () => {
  const val = 2 * 10
  expect(val).toBe(20);
})

test('test 2 nilai pembagian', () => {
  const val = 10 / 2
  expect(val).toBe(5);
})

test('test 3 nilai perkalian', () => {
  const val = 10 * 2 * 2
  expect(val).toBe(40);
})

test('test 3 nilai penambahan', () => {
  const val = 10 + 2 + 2
  expect(val).toBe(14);
})

test('test 3 nilai pengurangan', () => {
  const val = 10 - 2 - 2
  expect(val).toBe(6);
})

test('test 3 nilai pembagian', () => {
  const val = 10 / 2 / 5
  expect(val).toBe(1);
})


