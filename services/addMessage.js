import firebase from 'react-native-firebase';

export function addMessage(message){
    return firebase
        .firestore()
        .collection('messages')
        .doc()
        .set(message)
}
