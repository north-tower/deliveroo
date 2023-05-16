import { StyleSheet, Text, View } from 'react-native';
import tw from "tailwind-react-native-classnames"
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ResturantScreen from './screens/ResturantScreen';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store } from './store';
import BasketScreen from './screens/BasketScreen';



const Stack = createNativeStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Provider store={store}>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}  options={{
                  headerShown: false,
                }}/>
            <Stack.Screen name="Resturant" component={ResturantScreen}  options={{
                  headerShown: false,
                }}/>
              <Stack.Screen name="Basket" component={BasketScreen}  options={{
                presentation: "modal",
                  headerShown: false,
                }}/>
          </Stack.Navigator>
        </SafeAreaProvider>
      </Provider>
      
    </NavigationContainer>
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
