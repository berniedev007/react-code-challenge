import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
//import { shallow } from 'enzyme';

test('renders the app', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/Click an image/i);
  expect(headerElement).toBeInTheDocument();
});


describe('test the lightbox', () => {
  describe('when user clicks image', () => {
    it ('calls correct function to save the information', () => {
      const { getByTestId, asFragment } = render(<App />);
      const firstRender = asFragment()

      // Click button
      fireEvent.click(getByTestId('image0'))

      //const secondRender = asFragment()

      const lightbox = getByTestId("lightbox");
      //expect(secondRender).not.toContain(lightbox)
      expect(lightbox).not.toBeNull()
       
    });
  });

  describe('when user doesn\'t click image', () => {
    it ('calls correct function to save the information', () => {
      const { queryByTitle, queryByRole, asFragment } = render(<App />);

      const lightbox = queryByRole("lightbox");
      expect(lightbox).toBeNull()
       
    });
  });
});
