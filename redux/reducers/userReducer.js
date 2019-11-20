import { handleActions } from 'redux-actions';
import { actions } from '../actions/constants';
import { getErrorMessage } from '../actions/errors';

const registrationFailedHandler = (state, action) => {
    const { errorCode } = action.payload;
    const registrationErrorMessage = getErrorMessage(errorCode);
    return ({
        ...state,
        registrationErrorMessage,
        registrationPassed: false
    })
};

const registrationPassedHandler = (state, action) => {
    return ({
        ...state,
        registrationErrorMessage: null,
        registrationPassed: true
    })
};

const signInFailedHandler = (state, action) => {
    const { errorCode } = action.payload;
    const signInErrorMessage = getErrorMessage(errorCode);
    return ({
        ...state,
        signInErrorMessage,
        signInPassed: false
    })
};

const signInPassedHandler = (state, action) => {
    const { userInfo } = action.payload;
    return ({
        ...state,
        userInfo,
        signInErrorMessage: null,
        signInPassed: true
    })
};

const initialState = {
    userInfo: {},
    registrationErrorMessage: null,
    registrationPassed: false,
    signInErrorMessage: null,
    signInPassed: false
};

export const userReducer = handleActions({
    [actions.USER_REQUEST_REGISTRATION_FAILED] : registrationFailedHandler,
    [actions.USER_REQUEST_REGISTRATION_PASSED] : registrationPassedHandler,
    [actions.USER_SIGN_IN_FAILED] : signInFailedHandler,
    [actions.USER_SIGN_IN_PASSED] : signInPassedHandler
}, initialState);
