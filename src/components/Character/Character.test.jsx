import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Character from './Character';

describe('Character component', () => {
  afterEach(() => cleanup());
  it('renders Character', () => {
    const { asFragment } = render(
      <Character
        name="arnold"
        image="https://vignette.wikia.nocookie.net/heyarnold/images/f/f5/Arnold.png/revision/latest?cb=20181027162333"
      />);
    expect(asFragment()).toMatchSnapshot();
  });
});
