import React from 'react';
import { shallow } from 'enzyme';
import { Login, mapStateToProps, mapDispatchToProps } from './Login';
import { addUser } from '../../actions';


describe('App', () => {
  let wrapper;

  it('should match the App snapshot', () => {
    let wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
  })


  describe('mapsStateToProps', () => {
    it('should return only movies and loading properties from the store', () => {
        const mockState = {
            user: {},
            userLog: false,
        };
        const expected = {
            user: {},
            userLog: false
        };
        const mappedProps = mapStateToProps(mockState);

        expect(mappedProps).toEqual(expected);
    });
});

describe('mapDispatchToProps', () => {
    it('calls dispatch with an addMovies action when addMovies is called',
        () => {
            const mockDispatch = jest.fn();
            const actionToDispatch = addUser({ sample: 'user' });
            const mappedProps = mapDispatchToProps(mockDispatch);

            mappedProps.addUser({ sample: 'user' });

            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });  
})