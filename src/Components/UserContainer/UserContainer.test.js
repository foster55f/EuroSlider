import React from 'react';
import { shallow } from 'enzyme';
import { UserContainer, mapStateToProps, mapDispatchToProps } from './UserContainer';
import { userLogOut } from '../../actions';


describe('UserContainer', () => {
  let wrapper;

  it('should match the App snapshot', () => {
    let wrapper = shallow(<UserContainer />);
    expect(wrapper).toMatchSnapshot();
  })


  describe('mapsStateToProps', () => {
    it('should return only user info and login info from the store', () => {
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
    it('calls dispatch with an userLogOut action when userLogOut is called',
        () => {
            const mockDispatch = jest.fn();
            const actionToDispatch = userLogOut(false);
            const mappedProps = mapDispatchToProps(mockDispatch);

            mappedProps.userLogOut(false);

            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });  
})