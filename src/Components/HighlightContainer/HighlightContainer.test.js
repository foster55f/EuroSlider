import React from 'react';
import { shallow } from 'enzyme';
import { HighLightContainer, mapStateToProps } from './HighlightContainer';

describe('HighlightContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HighLightContainer
        displayGames={[
          
      ]}
    />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})

  describe('mapsStateToProps', () => {
    it('should return only movies and loading properties from the store', () => {
        const mockState = {
            games: [],
            displayGames: [],
        };
        const expected = {
            games: [],
            displayGames: [],
        };
        const mappedProps = mapStateToProps(mockState);

        expect(mappedProps).toEqual(expected);
        });
    });