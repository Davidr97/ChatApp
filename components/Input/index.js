import React from "react";
import { TextInput } from "react-native";
import { styles } from './styles';
import { fonts } from '../../styles/fonts';

class Input extends React.Component{


    _onChangeText = text => {
        const { name, onTextChanged } = this.props;
        onTextChanged(name, text);
    };

    render() {
        return (
            <TextInput
                style={[this.props.styles, styles.input, fonts.normal]}
                multiline={false}
                autocorrect={false}
                onChangeText={this._onChangeText}
                value={this.props.value}
                placeholder={this.props.placeholder}
                secureTextEntry={this.props.secureTextEntry}
            />
        );
    }

}

Input.defaultProps = {
    secureTextEntry: false
};

export default Input;
