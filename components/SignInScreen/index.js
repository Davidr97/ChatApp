import React from "react";
import { View, KeyboardAvoidingView } from "react-native";
import Input from '../Input';
import Button from '../Button';
import InputGroup from '../InputGroup';
import { colors } from '../../styles/colors';
import { styles } from './styles';
import SmallText from '../SmallText';


class SignInScreen extends React.Component{

    constructor(props) {
        super(props);
    }

    componentDidUpdate(){
        const { signInPassed } = this.props;
        if(signInPassed){
            this.props.clearLoginFields();
            this.props.resetLoginFlag();
            this.props.navigation.navigate('Chat');
        }
    }

    _signIn = () => {
        const { loginEmail, loginPassword } = this.props.loginFields;
        const { signIn } = this.props;
        signIn(loginEmail, loginPassword);
    };

    render() {
        const { signInErrorMessage, loginFields, onTextChanged } = this.props;
        return (
            <View style={styles.container}>
                <KeyboardAvoidingView style={styles.loginScreen}>
                    <InputGroup>
                        <Input
                            name={'Email'}
                            value={loginFields.loginEmail}
                            onTextChanged={onTextChanged}
                            placeholder={'Email'}
                        />
                        <Input
                            name={'Password'}
                            value={loginFields.loginPassword}
                            onTextChanged={onTextChanged}
                            placeholder={'Password'}
                            secureTextEntry={true}
                        />
                        {signInErrorMessage && <SmallText styles={styles.errorMessage}>{signInErrorMessage}</SmallText>}
                    </InputGroup>
                    <InputGroup styles={styles.buttonGroup}>
                        <Button backgroundColor={colors.purple} color={colors.white} onPress={this._signIn}>
                            Login
                        </Button>
                        <Button backgroundColor={colors.purple} color={colors.white} onPress={() => this.props.navigation.navigate('CreateUser')}>
                            Sign up
                        </Button>
                    </InputGroup>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

export default SignInScreen;
