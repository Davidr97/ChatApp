import firebase from 'react-native-firebase';

export function subscribeToMessages(handler){
    return firebase
        .firestore()
        .collection('messages')
        .orderBy('createdAt','desc')
        .onSnapshot({
            error: err => console.log(err),
            next: querySnapshot => {
                const messages = Array
                    .from(querySnapshot.docs)
                    .map(doc => {
                        const message = doc.data();
                        const { seconds, nanoseconds } = message.createdAt;
                        return {
                            ...message,
                            createdAt: new Date(seconds * 1000 + nanoseconds * 0.000001)
                        }
                    });
                handler(messages);
            }
        })
}
