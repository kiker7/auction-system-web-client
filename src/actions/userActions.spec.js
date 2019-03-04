import * as userActions from './userActions';
import * as types from '../constants/actionTypes';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe("User Actions", () => {

    beforeEach(function () {
      moxios.install();
    });

    afterEach(function () {
      moxios.uninstall();
    });

    it("should create BEGIN_API_CALL and SINGIN_USER action when user sign in", () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: {token: '', username: 'new-user2'}
        });
      });

      const expectedActions = [
        {type: types.BEGIN_API_CALL},
        {type: types.SIGNIN_USER}
      ];

      const store = mockStore({ user: {}});
      const user = {
        username: 'new-user2',
        password: '123456'
      };

      return store.dispatch(userActions.signIn(user))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it("should create BEGIN_API_CALL and USERS_LOAD_SUCCESS action", () => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: [
            {
              "username": "new-user1",
              "firstName": "First-user",
              "lastName": "Last-user"
            },
            {
              "username": "new-user2",
              "firstName": "First-user",
              "lastName": "Last-user"
            }
          ]
        });
      });

      const expectedActions = [
        {type: types.BEGIN_API_CALL},
        {type: types.USERS_LOAD_SUCCESS,
          users: [
            {
              "username": "new-user1",
              "firstName": "First-user",
              "lastName": "Last-user"
            },
            {
              "username": "new-user2",
              "firstName": "First-user",
              "lastName": "Last-user"
            }
          ]
        }
      ];
      const store = mockStore();
      return store.dispatch(userActions.loadUsers())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
