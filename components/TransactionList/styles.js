import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        margin: 8,
        padding: 8,
        backgroundColor: 'white',
        alignItems: 'stretch',
        borderRadius: 8
    },
    row: {
        flex: 1,
        flexDirection: 'row'
    },
    keyStyle: {
        color: 'black',
        fontSize: 16,
        fontWeight: '500'
    },
    valueStyle: {
        color: 'black',
        fontSize: 16,
        fontWeight: '700',
        marginLeft: 8
    }
});