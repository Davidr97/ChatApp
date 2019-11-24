import { errors } from '../redux/actions/errors';
import { addUser } from '../services/addUser';

export const updateUserProfile = (userCredential, userInfo, dispatcher) => {
    const { user } = userCredential;
    const { displayName, photoURL } = userInfo;
    const { onSuccessDispatch, onFailureDispatch } = dispatcher;
    user
        .updateProfile({displayName, photoURL})
        .then(() => {
            addUser({
                id: user.uid,
                displayName,
                photoURL
            });
            onSuccessDispatch()
        })
        .catch(() => onFailureDispatch(errors.AUTH_REGISTRATION_FAILED.errorCode))
};
