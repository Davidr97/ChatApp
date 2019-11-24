import { handleActions } from 'redux-actions';
import { actions } from '../actions/constants';
import {getErrorMessage} from '../actions/errors';

const usersReceivedFailedHandler = (state, action) => {
    const { errorCode } = action.payload;
    const errorMessage = getErrorMessage(errorCode);
    return {
        ...state,
        errorMessage
    }
};

const usersReceivedHandler = (state, action) => {
    const { users } = action.payload;
    return {
        ...state,
        users
    }
};

export const usersReducer = handleActions({
    [actions.RECEIVE_USERS_FAILED] : usersReceivedFailedHandler,
    [actions.RECEIVE_USERS] : usersReceivedHandler
}, {errorMessage:null, users: []});
