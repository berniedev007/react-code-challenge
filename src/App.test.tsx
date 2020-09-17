import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the app', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/Click an image/i);
  expect(headerElement).toBeInTheDocument();
});

describe('MyModal.jsx', function() {
  it('tests the Close Button', function() {
    // var spy = sinon.spy();
    // var MyModalComponent = TestUtils.renderIntoDocument(
    //   <MyModal show onHide={spy}/>
    // );

    // // This passes
    // TestUtils.findRenderedComponentWithType(MyModalComponent, MyModal);

    // // This will get the actual DOM node of the button
    // var closeButton = document.body.getElementsByClassName("my-modal-class")[0].getElementsByClassName("btn btn-default")[0];

    // // Will now get here
    // TestUtils.Simulate.click(CloseButton);
    // expect(spy.calledOnce).to.be.true;
  });
});