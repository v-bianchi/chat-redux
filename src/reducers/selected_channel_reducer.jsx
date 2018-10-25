import { SET_CHANNEL } from '../actions'

export default function(state = null, action) {
  switch (action.type) {
    case SET_CHANNEL:
      return action.payload.channel;
    default:
      return state;
  }
}
