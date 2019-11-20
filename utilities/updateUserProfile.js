import { errors } from '../redux/actions/errors';

export const updateUserProfile = (userCredential, userInfo, dispatcher) => {
    const { user } = userCredential;
    const { displayName, photoURL } = userInfo;
    const { onSuccessDispatch, onFailureDispatch } = dispatcher;
    user
        .updateProfile({displayName, photoURL})
        .then(() => onSuccessDispatch())
        .catch(() => onFailureDispatch(errors.AUTH_REGISTRATION_FAILED.errorCode))
};
