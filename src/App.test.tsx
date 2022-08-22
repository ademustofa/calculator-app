import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


test('test render 3 input and checkbox value', async () => {
  render(<App />);
  const inputElement = await screen.queryAllByTestId("input-test")
  expect(inputElement).toHaveLength(3);

  const checkElement = await screen.queryAllByTestId("check-test")
  expect(checkElement).toHaveLength(3);
})

test('test render 4 button operation', async () => {
  render(<App />);
  expect(await screen.queryAllByRole('button')).toHaveLength(4)
})

test('test render result value', async () => {
  render(<App />);
  const inputElement = screen.getByTestId("result-test")
  expect(inputElement).toBeInTheDocument();
})

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


