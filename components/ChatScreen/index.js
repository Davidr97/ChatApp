import React from 'react';
import { styles } from './styles';
import { View } from "react-native";
import UsersList from '../UsersList';
import Chat from '../Chat';

class ChatScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.usersList}>
                    <UsersList users={this.props.users} getUsers={this.props.getUsers}/>
                </View>
                <View style={styles.usersChat}>
                    <Chat
                        userInfo={this.props.userInfo}
                        messages={this.props.messages}
                        onReceiveMessages={this.props.onReceiveMessages}/>
                </View>
            </View>
        );
    }
}

export default ChatScreen;
