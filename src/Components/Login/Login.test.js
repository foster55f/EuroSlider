import React from 'react';
import { shallow } from 'enzyme';
import { Login, mapStateToProps, mapDispatchToProps } from './Login';
import { addUser, userLogIn } from '../../actions';


describe('Login', () => {
  let wrapper;

  it('should match the App snapshot', () => {
    let wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
  })


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