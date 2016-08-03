//imports to support synchronous testing
import expect from 'expect';
import * as actions from '../src/actions/search_actions';
import * as types from '../src/actions/action_types';

//other imports to support async testing
import configureMockStore from 'redux-mock-store';
// later, add thunk here as well

//another import to fake HTTP responses!
import nock from 'nock';

const mockStore = configureMockStore()

describe('actions', function() {
  describe('#removeCity', function() {
    it('should remove a report', function(){
      const payload = {
        name: "San Francisco"
      }
      const expectedAction = {
        type: types.REMOVE_CITY,
        payload
      }
      expect(
        actions.removeCity("San Francisco")
      ).toEqual(expectedAction)
    })
  })
})

describe('async actions', function() {
  afterEach(function() {
    nock.cleanAll()
  })

  it('creates RESULTS_RECEIVED when doSearch is done', function(){
    nock('http://api.openweathermap.org')
      .get(/.*/)
      .reply(200, {
        data: {
          city: {
            name: "San Francisco"
          }
        }
      })

    const expectedAction = [{
      type: types.RESULTS_RECEIVED,
      payload: {
        city: {
          name: "San Francisco"
        }
      }
    }]

    const store = mockStore({ weather: [] })

    return store.dispatch(actions.doSearch())
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction)
      })
  })
})
