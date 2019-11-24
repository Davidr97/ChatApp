import { StyleSheet } from "react-native";
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
    container: {
        paddingLeft: 120,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: colors.green
    },
    image: {
        height: 45,
        width: 45,
        borderRadius: 30,
        marginRight: 5
    }
});
