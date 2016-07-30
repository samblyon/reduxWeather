import { FETCH_WEATHER } from '../actions/action_types';

export default function weatherReducer(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return ['hi'];
    default: return state;
  }
}
