import firebase from 'react-native-firebase';
import { updateUserProfile } from '../utilities/updateUserProfile';

export const createUserWithEmailAndPassword = (userInfo, dispatcher) => {
    const { email, password } = userInfo;
    const { onFailureDispatch } = dispatcher;
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(userCredential => updateUserProfile(userCredential, userInfo, dispatcher))
        .catch(({code}) => onFailureDispatch(code))
};
