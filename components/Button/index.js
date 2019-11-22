import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import NormalText from '../NormalText';
import { styles } from './styles';

class Button extends Component{

    render() {
        const backgroundColor = {
            backgroundColor: this.props.backgroundColor
        };
        const opacity = this.props.disabled ? 1 : 0.5;
        return (
            <TouchableOpacity
                activeOpacity={opacity}
                onPress={this.props.onPress}
                style={[backgroundColor,styles.wideButton]}
            >
                <NormalText color={this.props.color}>
                    {this.props.children}
                </NormalText>
            </TouchableOpacity>
        );
    }
}

Button.defaultProps = {
    disabled: false
};

export default Button;
