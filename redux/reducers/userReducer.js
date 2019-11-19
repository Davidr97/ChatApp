import { handleActions } from 'redux-actions';
import { actions } from '../actions/constants';

const registrationFailedHandler = (state, action) => {
    const { errorMessage } = action.payload;
    return ({
        ...state,
        userInfo: {},
        errorMessage
    })
};

const registrationPassedHandler = (state, action) => {
    const { userInfo } = action.payload;
    return ({
        ...state,
        userInfo,
        errorMessage: null
    })
};

const initialState = {
    userInfo: {},
    errorMessage: null
};

export const userReducer = handleActions({
    [actions.USER_REQUEST_REGISTRATION_FAILED] : registrationFailedHandler,
    [actions.USER_REQUEST_REGISTRATION_PASSED] : registrationPassedHandler
}, initialState);




