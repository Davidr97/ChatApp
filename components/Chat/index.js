import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat';
import { addMessage } from '../../services/addMessage';
import { subscribeToMessages } from '../../services/subscribeToMessages';

class Chat extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount(){
        this.unsubsribe = subscribeToMessages(messages => this.props.onReceiveMessages(messages));
    }

    componentWillUnmount(){
        this.unsubsribe();
    }

    _parseMessage = message => {
        const { _id, text, createdAt } = message;
        const user = this._parseUserInfo();
        return {
            _id,
            text,
            createdAt,
            user
        }
    };

    _parseUserInfo = () => {
        const { uid, displayName, photoURL} = this.props.userInfo;
        return {
            _id: uid,
            name: displayName,
            avatar: photoURL
        }
    };

    onSend(messages = []) {
        messages.forEach(message => addMessage(this._parseMessage(message)));
    }

    render() {
        return (
            <GiftedChat
                messages={this.props.messages}
                onSend={messages => this.onSend(messages)}
                user={this._parseUserInfo()}
            />
        )
    }
}

export default Chat;
