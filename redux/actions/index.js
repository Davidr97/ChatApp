import { createActions } from 'redux-actions';
import { actions } from './constants';
import { createUserWithEmailAndPassword } from '../../utilities/createUserWithEmailAndPassword';


export const { userRequestRegistrationFailed, userRequestRegistrationPassed } = createActions({
    [actions.USER_REQUEST_REGISTRATION_FAILED] : errorMessage => ({errorMessage}),
    [actions.USER_REQUEST_REGISTRATION_PASSED] : userInfo => ({userInfo})
});

export function createUser(email, password, displayName, photoURL){
    return function(dispatch){
        const dispatcher = {
            onSuccessDispatch : userInfo => dispatch(userRequestRegistrationPassed(userInfo)),
            onFailureDispatch : errorMessage => dispatch(userRequestRegistrationFailed(errorMessage))
        };
        const userInfo = {
            email,
            password,
            displayName,
            photoURL
        };
        createUserWithEmailAndPassword(userInfo, dispatcher);
    }
}
