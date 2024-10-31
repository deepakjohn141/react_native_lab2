import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        margin: 8,
        padding: 8,
        backgroundColor: 'white',
        alignSelf: 'stretch',
        alignItems: 'stretch',
        borderRadius: 8
    },
    row: {
        flexDirection: 'row',
        alignItems: 'flex-start'
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