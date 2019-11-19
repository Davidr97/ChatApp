import firebase from 'react-native-firebase';
import {updateUserProfile} from './updateUserProfile';
import { errors } from '../redux/actions/errors';

export const createUserWithEmailAndPassword = (userInfo, dispatcher) => {
    const { email, password } = userInfo;
    const { onFailureDispatch } = dispatcher;

    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(userCredential => updateUserProfile(userCredential, userInfo, dispatcher))
        .catch(({errorCode}) => {
            if(errorCode === errors.EMAIL_ALREADY_IN_USE.errorCode){
                onFailureDispatch(errors.EMAIL_ALREADY_IN_USE.errorMessage)
            }else if(errorCode === errors.INVALID_EMAIL.errorCode){
                onFailureDispatch(errors.INVALID_EMAIL.errorMessage)
            }else if(errorCode === errors.OPERATION_NOT_ALLOWED.errorCode){
                onFailureDispatch(errors.OPERATION_NOT_ALLOWED.errorMessage)
            }else if(errorCode === errors.WEAK_PASSWORD.errorCode){
                onFailureDispatch(errors.WEAK_PASSWORD.errorMessage)
            }
        })
};
