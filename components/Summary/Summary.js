import { View, Text } from "react-native"
import React, { useContext } from "react"
import { StateContext, TransactionType } from "../../StateContext"
import styles from "./styles";

export default function Summary() {
    const { getTotalByTransactionType } = useContext(StateContext);
    const creditedAmount = getTotalByTransactionType(TransactionType.Credit);
    const debitedAmount = getTotalByTransactionType(TransactionType.Debit);

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.keyText}>Total Income:</Text>
                <Text style={styles.valueText}>${creditedAmount}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.keyText}>Total Expense:</Text>
                <Text style={styles.valueText}>${debitedAmount}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.keyText}>Balance Amount:</Text>
                <Text style={styles.valueText}>${creditedAmount - debitedAmount}</Text>
            </View>
        </View>
    )
}