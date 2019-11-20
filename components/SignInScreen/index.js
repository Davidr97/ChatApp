import React from "react";
import { View, Text } from "react-native";


class SignInScreen extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidUpdate(){
        const { signInPassed } = this.props;
        console.log(this.props);
        if(signInPassed){
            // navigate
            console.log('Navigation time');
        }
    }

    _signIn = () => {
        const { signIn } = this.props;
    };

    render() {
        const { signInErrorMessage } = this.props;
        return (
            <View style={{flex:1}}>
                <Text>
                    Sign in screen
                </Text>
            </View>
        );
    }
}

export default SignInScreen;
