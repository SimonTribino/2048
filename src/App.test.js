import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders the title', () => {
  const { getAllByText } = render(<App />)
  const title = getAllByText('2048')
  expect(title[0]).toBeInTheDocument()
})
