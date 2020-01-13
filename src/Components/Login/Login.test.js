import React from 'react';
import { shallow } from 'enzyme';
import { Login, mapStateToProps, mapDispatchToProps } from './Login';
import { addUser, userLogIn } from '../../actions';


describe('Login', () => {
  let wrapper;

  it('should match the App snapshot', () => {
    wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
  })


  it('should update state on change', () => {
    let mockEvent = { target: { value: 'foster' } }
    let initialState = { username: '' }
    let expectedState = 'foster' 
    
    wrapper.setState(initialState)
    wrapper.find('.userName').simulate('change', mockEvent)
    expect(wrapper.state('username')).toEqual(expectedState)
  });

  it('should run goToUserFavorites when the button is clicked', () => {
    wrapper.instance().goToUserFavorites = jest.fn();
    wrapper.instance().goToUserFavorites();
    const mockEvent = { preventDefault: jest.fn() };
  
    wrapper.find('.favorite-button').simulate('click', mockEvent);
  
    expect(wrapper.instance().goToUserFavorites).toHaveBeenCalled();
  });

  it('should run goToFavorites when the button is clicked', () => {
    wrapper.instance().goToFavorites = jest.fn();
    wrapper.instance().goToFavorites();
    const mockEvent = { preventDefault: jest.fn() };
  
    wrapper.find('.favorite-button').simulate('click', mockEvent);
  
    expect(wrapper.instance().goToFavorites).toHaveBeenCalled();
  });


  describe('mapsStateToProps', () => {
    it('should return only userinfo and user properties from the store', () => {
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
    it('calls dispatch with an addUser action when addUser is called',
        () => {
            const mockDispatch = jest.fn();
            const actionToDispatch = addUser({ sample: 'user' });
            const mappedProps = mapDispatchToProps(mockDispatch);

            mappedProps.addUser({ sample: 'user' });

            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
      });
  
      it('calls dispatch with an userLogin action when userLogin is called',
      () => {
          const mockDispatch = jest.fn();
          const actionToDispatch = userLogIn(true);
          const mappedProps = mapDispatchToProps(mockDispatch);

          mappedProps.userLogIn(true);

          expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });  
})