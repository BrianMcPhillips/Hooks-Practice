import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterList from './CharacterList';

describe('CharacterList component', () => {
  afterEach(() => cleanup());
  it('renders CharacterList', () => {
    const { asFragment } = render(
      <CharacterList 
        data={[
          {
            name: 'Arnold Shortman',
            image: 'https://vignette.wikia.nocookie.net/heyarnold/images/f/f5/Arnold.png/revision/latest?cb=20181027162333',
            _id: '12345634'
          }
        ]}
      />);
    expect(asFragment()).toMatchSnapshot();
  });
});
