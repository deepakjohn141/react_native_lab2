import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Summary from './components/Summary/Summary';
import TransactionList from './components/TransactionList/TransactionList';
import TransactionDetail from './components/TransactionDetail/TransactionDetail';
import { StateProvider } from './StateContext';
import Icon from 'react-native-vector-icons/FontAwesome';


const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()
const Transaction = () => (
  <Stack.Navigator >
    <Stack.Screen
      name='Transaction List'
      component={TransactionList}
      screenOptions={{ headerShown: false }}>
    </Stack.Screen>
    <Stack.Screen name='Transaction Detail'
      component={TransactionDetail}>

    </Stack.Screen>
  </Stack.Navigator>
);

export default function App() {
  return (
    <StateProvider>
      <NavigationContainer>

        <Tab.Navigator
          initialRouteName='Transactions'
          screenOptions={({ route }) => ({
            tabBarActiveBackgroundColor: 'dodgerblue',
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray',
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Transactions') {
                iconName = 'list-ul'
              } else {
                iconName = 'file-o';
              }
              return <Icon name={iconName} size={24} color={color} />;
            }
          })}>
          <Tab.Screen
            name='Transactions'
            component={Transaction}
          >

          </Tab.Screen>
          <Tab.Screen
            name='Summary'
            component={Summary}
          >
          </Tab.Screen>
        </Tab.Navigator>

      </NavigationContainer>
    </StateProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
