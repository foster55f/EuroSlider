import React from 'react';
import { shallow } from 'enzyme';
import { SearchForm, mapStateToProps} from './SearchForm';


describe('SearchForm', () => {
  let wrapper;

  it('should match the App snapshot', () => {
    wrapper = shallow(<SearchForm />);
    expect(wrapper).toMatchSnapshot();
  })


  describe('mapsStateToProps', () => {
    it('should return only games from the store', () => {
        const mockState = {
            games: []
        };
        const expected = {
            games:[]
        };
        const mappedProps = mapStateToProps(mockState);

        expect(mappedProps).toEqual(expected);
        });
    });
})