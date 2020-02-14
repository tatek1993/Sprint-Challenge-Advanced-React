import React from 'react';
import { render, toBeInTheDocument, fireEvent, waitForElement } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import ReactDOM from 'react-dom';
import App from './App';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Nav title renders', () => {
  const { getByText } = render(<App />);

  const navTitle = getByText(/Meet the Players/i);
  expect(navTitle).toBeInTheDocument();
});

test('Dark Mode toggles', async () => {
  const { getByTestId } = render(<App />);
  
  
  fireEvent.click(getByTestId(/button/i));

  const output = await waitForElement( 
    () => getByTestId('dmTestId')
 );
  expect(navTitle).toBeInTheDocument();
});


