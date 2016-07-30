import { FETCH_WEATHER, RESULTS_RECEIVED } from '../actions/action_types';

export default function weatherReducer(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return ['hi'];
    case RESULTS_RECEIVED:
      return [action.query, ...state];
    default: return state;
  }
}
