import { createActions } from 'redux-actions';
import { actions } from './constants';
import { createUserWithEmailAndPassword } from '../../utilities/createUserWithEmailAndPassword';
import { signInWithEmailAndPassword } from '../../utilities/signInWithEmailAndPassword';
import { getValidationErrorCode } from '../../utilities/validateFields';
import { createUserValidation } from '../../components/CreateUserScreen/validation';
import { signInValidation } from '../../components/SignInScreen/validation';

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
