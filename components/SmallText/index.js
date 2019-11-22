import React, { Component } from "react";
import { Text} from "react-native";
import { fonts } from '../../styles/fonts';


class SmallText extends Component{

    render() {
        return (
            <Text style={[this.props.styles, fonts.small]}>
                {this.props.children}
            </Text>
        );
    }
}

export default SmallText;
