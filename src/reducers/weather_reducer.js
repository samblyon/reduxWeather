import {
  RESULTS_RECEIVED,
  REMOVE_CITY
} from '../actions/action_types';
import expect from 'expect';

const filterState = (state, newCityName) => {
  return state.filter(weatherObj => {
    return weatherObj.city.name !== newCityName
  });
}

export default function weatherReducer(state = [], action) {
  switch (action.type) {
    case RESULTS_RECEIVED:
      return [
        action.payload,
        ...filterState(state, action.payload.city.name)
      ];
    case REMOVE_CITY:
      return filterState(state, action.payload.name);
    default: return state;
  }
}
