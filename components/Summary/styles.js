import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        margin: 8,
        padding: 8,
        backgroundColor: 'white',
        borderRadius: 8
    },
    row: {
        flexDirection: 'row'
    },
    keyText: {
        color: 'black',
        fontSize: 16,
        fontWeight: '500'
    },
    valueText: {
        color: 'black',
        alignSelf: 'flex-end',
        fontWeight: '700',
        fontSize: 16,
        marginLeft: 8
        
    }
})