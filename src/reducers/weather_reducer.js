import { FETCH_WEATHER, RESULTS_RECEIVED } from '../actions/action_types';

export default function weatherReducer(state = [], action) {
  switch (action.type) {
    case RESULTS_RECEIVED:
      return [action.payload, ...state]; // used to be action.query
    default: return state;
  }
}
