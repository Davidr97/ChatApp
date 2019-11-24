import firebase from 'react-native-firebase';
import { errors } from '../redux/actions/errors';

export function getUsers(dispatcher){
    const { onSuccessDispatch, onFailureDispatch } = dispatcher;
    firebase
        .firestore()
        .collection('users')
        .get()
        .then(querySnapshot => onSuccessDispatch(Array.from(querySnapshot.docs).map(doc => doc.data())))
        .catch(() => onFailureDispatch(errors.FETCH_USERS_REQUEST_FAILED.errorCode));
}
