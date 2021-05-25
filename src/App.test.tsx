import * as React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';
import App from './App';
import { visualDiff } from '@web/test-runner-visual-regression';

describe('<App>', () => {
  it('renders learn react link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/learn react/i);
    expect(document.body.contains(linkElement));
  });

  it('can diff an element', async () => {
    const element = document.createElement('p');
    element.textContent = 'Hello world';
    element.style.color = 'blue';
    document.body.appendChild(element);
  
    await visualDiff(element, 'my-element');
  });
});
