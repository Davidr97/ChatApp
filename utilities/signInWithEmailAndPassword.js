import firebase from 'react-native-firebase';

export const signInWithEmailAndPassword = (userInfo, dispatcher) => {
    const { email, password } = userInfo;
    const { onSuccessDispatch, onFailureDispatch } = dispatcher;
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            const { displayName, photoURL } = userCredential.user;
            const userInfo = {
                email,
                password,
                displayName,
                photoURL
            };
            onSuccessDispatch(userInfo);
        })
        .catch(({code}) => onFailureDispatch(code));
};
