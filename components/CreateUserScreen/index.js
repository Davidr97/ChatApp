import React from "react";
import { View, Text } from "react-native";
import { styles } from './styles';
import InputGroup from '../InputGroup';
import Input from '../Input';
import SmallText from '../SmallText';
import Button from '../Button';
import {colors} from '../../styles/colors';


class CreateUserScreen extends React.Component{

    constructor(props) {
        super(props);
    }

    componentWillUnmount(){
        this.props.clearFields();
        if(this.props.registrationPassed){
            this.props.resetRegistrationFlag();
        }
    }

    componentDidUpdate(){
        const { registrationPassed } = this.props;
        if(registrationPassed){
            this.props.navigation.navigate('SignIn')
        }
    }

    _createUser = () => {
        const { registerDisplayName, registerPhotoURL, registerEmail, registerPassword } = this.props.registerFields;
        const { createUser } = this.props;
        createUser(registerEmail, registerPassword, registerDisplayName, registerPhotoURL)
    };

    render() {
        const { registrationErrorMessage, registerFields, onTextChanged } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.registerScreen}>
                    <InputGroup>
                        <Input
                            name={'DisplayName'}
                            value={registerFields.registerDisplayName}
                            onTextChanged={onTextChanged}
                            placeholder={'Display name'}
                        />
                        <Input
                            name={'PhotoURL'}
                            value={registerFields.registerPhotoURL}
                            onTextChanged={onTextChanged}
                            placeholder={'Photo URL'}
                        />
                        <Input
                            name={'Email'}
                            value={registerFields.registerEmail}
                            onTextChanged={onTextChanged}
                            placeholder={'Email'}
                        />
                        <Input
                            name={'Password'}
                            value={registerFields.registerPassword}
                            onTextChanged={onTextChanged}
                            placeholder={'Password'}
                            secureTextEntry={true}
                        />
                        {registrationErrorMessage && <SmallText styles={styles.errorMessage}>{registrationErrorMessage}</SmallText>}
                    </InputGroup>
                    <InputGroup styles={styles.buttonGroup}>
                        <Button backgroundColor={colors.purple} color={colors.white} onPress={this._createUser}>
                            Sign up
                        </Button>
                    </InputGroup>
                </View>
            </View>
        );
    }
}

export default CreateUserScreen;
