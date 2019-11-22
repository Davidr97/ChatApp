import { StyleSheet } from "react-native";
import { totalSize } from "react-native-dimension";


export const fonts = StyleSheet.create({
    small:{
        fontSize: totalSize(1.5)
    },
    normal:{
        fontSize: totalSize(2.5)
    },
    big: {
        fontSize: totalSize(6)
    }
});

