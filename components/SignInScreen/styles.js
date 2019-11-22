import { StyleSheet } from "react-native";
import { colors } from '../../styles/colors';
import {height, width} from 'react-native-dimension';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.water
    },
    loginScreen: {
        height: height(47),
        width: width(70),
        backgroundColor: colors.white
    },
    buttonGroup: {
        justifyContent: "flex-end"
    },
    errorMessage: {
        color: colors.red,
        paddingLeft: 10
    }
});
