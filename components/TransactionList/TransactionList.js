import { View, Text, Button, Pressable, ScrollView } from "react-native"
import React, { useContext } from "react"
import { StateContext } from "../../StateContext"
import styles from "./styles";


export default function TransactionList({ navigation }) {
    const { transactions } = useContext(StateContext);
    const [transactionsList, setTransactionsList] = transactions
    const displayTransactions = (navigation) => {

        return transactionsList.map((ele) => {
            return <View key={ele.id} style={styles.container} >
                <Pressable onPress={() => { navigation.navigate('Transaction Detail', { id: ele.id }) }}>
                    <View style={styles.row}>
                        <Text style={styles.keyStyle}>Transaction Name:</Text>
                        <Text style={styles.valueStyle}>{ele.name}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.keyStyle}>Amount:</Text>
                        <Text style={styles.valueStyle}>${ele.amount}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.keyStyle}>Date:</Text>
                        <Text style={styles.valueStyle}>{ele.date}</Text>
                    </View>
                </Pressable>
            </View>
        });
    }

    return (
        <View  >
            <ScrollView>
                {displayTransactions(navigation)}
            </ScrollView>
        </View>
    )
}



