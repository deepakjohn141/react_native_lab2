import { View, Text } from "react-native"
import React, { useContext } from "react"
import { StateContext } from "../../StateContext"
import styles from "./styles";


export default function TransactionDetail({ navigation, route }) {
    const { getTransactionById } = useContext(StateContext);
     const transaction = getTransactionById(route.params.id)
    
     return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.keyStyle}>Id:</Text>
                <Text style={styles.valueStyle}>{transaction.id}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.keyStyle}>Name:</Text>
                <Text style={styles.valueStyle}>{transaction.name}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.keyStyle}>Type:</Text>
                <Text style={styles.valueStyle}>{transaction.type == 1 ? 'Credited' : 'Debited'}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.keyStyle}>Amount:</Text>
                <Text style={styles.valueStyle}>${transaction.amount}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.keyStyle}>Date:</Text>
                <Text style={styles.valueStyle}>{transaction.date}</Text>
            </View>
        </View>
    )
}