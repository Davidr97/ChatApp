import React, { Component } from "react";
import { Text} from "react-native";
import { fonts } from '../../styles/fonts';


class NormalText extends Component{

    render() {
        const color = {
            color: this.props.color
        };
        return (
            <Text style={[color, fonts.normal]}>
                {this.props.children}
            </Text>
        );
    }
}

export default NormalText;
