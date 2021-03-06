import reducer from '../src/reducers/weather_reducer';
import expect from 'expect';
import {
  RESULTS_RECEIVED,
  REMOVE_CITY
} from '../src/actions/action_types';

describe('todos reducer', function(){
  it('should return the initial state', function(){
    expect(
      reducer(undefined, {
        type: undefined
      })
    ).toEqual([])
  })
  it('should append new results', function(){
    expect(
      reducer([], {
        type: RESULTS_RECEIVED,
        payload: {
          city: {
            name: "San Francisco"
          }
        }
      })
    ).toEqual(
      [{
        city: {
          name: "San Francisco"
        }
      }]
    )
  })
  it('should remove items when deleted', function(){
    expect(
      reducer([{
        city: {
          name: "San Francisco"
        }
      }], {
        type: REMOVE_CITY,
        payload: {
          name: "San Francisco"
        }
      })
    ).toEqual([])
  })
})
