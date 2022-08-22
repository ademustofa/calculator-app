import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('test 2 nilai perkalian', () => {

})

test('test 2 nilai penambahan', () => {

})

test('test 2 nilai pengurangan', () => {

})

test('test 2 nilai pembagian', () => {

})

test('test 3 nilai perkalian', () => {

})

test('test 3 nilai penambahan', () => {

})

test('test 3 nilai pengurangan', () => {

})

test('test 3 nilai pembagian', () => {

})


