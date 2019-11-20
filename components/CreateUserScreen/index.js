import React from "react";
import { View, Text } from "react-native";


class CreateUserScreen extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidUpdate(){
        const { registrationPassed } = this.props;
        if(registrationPassed){
            // navigate
            console.log('Navigation time');
        }
    }

    _createUser = () => {
        const { createUser } = this.props;
    };

    render() {
        const { registrationErrorMessage } = this.props;
        return (
            <View style={{flex:1}}>
                <Text>
                    Create User Screen
                </Text>
            </View>
        );
    }
}

export default CreateUserScreen;
