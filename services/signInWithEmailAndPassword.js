import firebase from 'react-native-firebase';

export const signInWithEmailAndPassword = (userInfo, dispatcher) => {
    const { email, password } = userInfo;
    const { onSuccessDispatch, onFailureDispatch } = dispatcher;
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            const { uid, displayName, photoURL } = userCredential.user;
            const userInfo = {
                uid,
                displayName,
                photoURL
            };
            onSuccessDispatch(userInfo);
        })
        .catch(({code}) => onFailureDispatch(code));
};
