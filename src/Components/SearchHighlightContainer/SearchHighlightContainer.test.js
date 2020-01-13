import React from 'react';
import { shallow } from 'enzyme';
import { SearchHighlightContainer, mapStateToProps } from './SearchHighlightContainer';

describe('SearchHighlightContainer', () => {
  let wrapper;

    beforeEach(() => {
    wrapper = shallow(<SearchHighlightContainer
        displayGames={[{ id: 'barcelona' }]}
    />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})

  describe('mapsStateToProps', () => {
    it('should return only game highlights from the store', () => {
        const mockState = {
            displayGames: [{ team: 'barcelona' }],
        };
        const expected = {
            displayGames: [{ team: 'barcelona' }],
        };
        const mappedProps = mapStateToProps(mockState);

        expect(mappedProps).toEqual(expected);
        });
    });