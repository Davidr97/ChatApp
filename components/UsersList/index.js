import React from "react";
import { View, Image, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { styles } from './styles';


function Item({ photoURL }) {
    return (
        <Image
            style={styles.image}
            source={{uri: photoURL}}/>
    )
}

class UsersList extends React.Component{

    componentDidMount(){
        this.props.getUsers();
    }

    render() {
        const { errorMessage, users } = this.props.users;
        if(errorMessage){
            return (
                <View style={styles.container}>
                   <Text>
                       An error occurred while trying to get the users
                   </Text>
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <FlatList
                    data={users}
                    renderItem={({item}) => <Item photoURL={item.photoURL}/>}
                    keyExtractor={item => item.id}
                    horizontal={true}
                />
            </View>
        )
    }

}

export default UsersList;
