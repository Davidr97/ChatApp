import firebase from 'react-native-firebase';

export function addUser(user){
    return firebase
        .firestore()
        .collection('users')
        .doc()
        .set(user)
}
