import React from "react";
import { View } from "react-native";
import { styles } from './styles';


class InputGroup extends React.Component{

    render() {
        return (
            <View style={[this.props.styles, styles.container]}>
                {this.props.children}
            </View>
        );
    }
}



export default InputGroup;
