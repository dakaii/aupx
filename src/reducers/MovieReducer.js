import {
    API_CALL_SUCCESS,
    API_CALL_FAILURE
} from '../actions/Constants';

export default function(state = [], action) {
    switch (action.type) {
    case API_CALL_SUCCESS:
        return action.payload;
    case API_CALL_FAILURE:
        return [action.payload, ...state];
    default:
        return state
    }
}
