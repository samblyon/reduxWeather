import { RESULTS_RECEIVED } from '../actions/action_types';
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
    default: return state;
  }
}
