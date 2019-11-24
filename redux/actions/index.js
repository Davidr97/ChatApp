import { createActions, createAction } from 'redux-actions';
import { actions } from './constants';
import { createUserWithEmailAndPassword } from '../../services/createUserWithEmailAndPassword';
import { signInWithEmailAndPassword } from '../../services/signInWithEmailAndPassword';
import { getValidationErrorCode } from '../../utilities/validateFields';
import { createUserValidation } from '../../components/CreateUserScreen/validation';
import { signInValidation } from '../../components/SignInScreen/validation';
import { getUsers } from '../../services/getUsers';

export const { userRequestRegistrationFailed, userRequestRegistrationPassed } = createActions({
    [actions.USER_REQUEST_REGISTRATION_FAILED] : errorCode => ({errorCode}),
    [actions.USER_REQUEST_REGISTRATION_PASSED] : userInfo => ({userInfo})
});

export function createUser(email, password, displayName, photoURL){
    return function(dispatch){
        const dispatcher = {
            onSuccessDispatch : () => dispatch(userRequestRegistrationPassed()),
            onFailureDispatch : errorCode => dispatch(userRequestRegistrationFailed(errorCode))
        };
        const userInfo = {
            email,
            password,
            displayName,
            photoURL
        };
        const errorCode = getValidationErrorCode(createUserValidation, userInfo);
        if(errorCode){
            dispatcher.onFailureDispatch(errorCode);
        }else {
            createUserWithEmailAndPassword(userInfo, dispatcher);
        }
    }
}

export const { userSignInFailed, userSignInPassed } = createActions({
    [actions.USER_SIGN_IN_FAILED] : errorCode => ({errorCode}),
    [actions.USER_SIGN_IN_PASSED] : userInfo => ({userInfo})
});

export function signIn(email, password){
    return function(dispatch){
        const dispatcher = {
            onSuccessDispatch : userInfo => dispatch(userSignInPassed(userInfo)),
            onFailureDispatch : errorCode => dispatch(userSignInFailed(errorCode))
        };
        const userInfo = {
            email,
            password
        };
        const errorCode = getValidationErrorCode(signInValidation, userInfo);
        if(errorCode){
            dispatcher.onFailureDispatch(errorCode);
        }else{
            signInWithEmailAndPassword(userInfo, dispatcher);
        }
    }
}

export const { receiveUsersFailed, receiveUsers } = createActions({
    [actions.RECEIVE_USERS_FAILED] : errorCode => ({errorCode}),
    [actions.RECEIVE_USERS] : users => ({users})
});

export function fetchUsers(){
    return function(dispatch){
        const dispatcher = {
            onSuccessDispatch : users => dispatch(receiveUsers(users)),
            onFailureDispatch : errorCode => dispatch(receiveUsersFailed(errorCode))
        };
        getUsers(dispatcher);
    }
}


export const receiveMessages = createAction(actions.MESSAGES_RECEIVED, messages => ({messages}));

export const onTextChanged = createAction(actions.ON_TEXT_CHANGED);

export const clearRegistrationFields = createAction(actions.CLEAR_REGISTRATION_FIELDS);

export const resetRegistrationFlag = createAction(actions.RESET_REGISTRATION_FLAG);

export const clearLoginFields = createAction(actions.CLEAR_LOGIN_FIELDS);

export const resetLoginFlag = createAction(actions.RESET_LOGIN_FLAG);
