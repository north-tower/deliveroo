import { StyleSheet, Text, View , SafeAreaView, TouchableOpacity, Image, ScrollView} from 'react-native'
import React, {useState, useMemo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectResturant } from '../features/resturantSlice';
import { useNavigation } from "@react-navigation/native"
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import { XCircleIcon } from 'react-native-heroicons/solid';
import tw from "tailwind-react-native-classnames"

const BasketScreen = () => {
  const navigation = useNavigation();
  const resturant = useSelector(selectResturant);
  const items = useSelector(selectBasketItems);
  const dispatch = useDispatch();
  const basketTotal = useSelector(selectBasketTotal);
  const [ groupedItemsInBasket, setGroupedItemsInBasket ]  = useState([]);

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  

  

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`flex-1 bg-gray-100`}>
        <View style={tw`p-5  bg-white `}>
          <View>
            <Text style={tw`text-lg text-black font-bold text-center`}>Basket</Text>
            <Text style={tw`text-center text-gray-400`}>
              {resturant.title}
            </Text>
          </View>
          <TouchableOpacity onPress={navigation.goBack} 
          style={tw`rounded-full bg-gray-100 absolute top-3 right-5`}>
            <XCircleIcon color="#00ccbb" height={50} width={50} />
          </TouchableOpacity>
        </View>
        
        <View style={tw`flex-row items-center px-4 py-3 bg-white my-5`}>
          <Image source={{ uri: "https://links.papareact.com/wru",}}
          style={tw`h-7 w-7 bg-gray-300 p-4 rounded-full`} />
          <Text style={tw`flex-1 text-black`}>Deliver in 50-75 min</Text>
          <TouchableOpacity>
            <Text style={tw`text-black`}>Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={tw`bg-white`}>
  {Object.entries(groupedItemsInBasket).map(([key, items], index) => (
    <View
      key={key}
      style={[
        tw`flex-row items-center bg-white py-2 px-5`,
        index !== 0 && tw`border-t border-gray-200`,
      ]}
    >
              <Text style={tw`text-green-300 mr-2`}>{items.length} x</Text>
              <Image source={{ uri: items[0]?.image }}
              style={tw`h-12 w-12 rounded-full`} />
              <Text style={tw`flex-1`}>{items[0]?.name}</Text>
              <Text style={tw`text-gray-600 mr-2`}>
                ${items[0]?.price} 
              </Text>
              <TouchableOpacity>
                <Text style={tw`text-green-400 text-xs`} 
                onPress={() => dispatch(removeFromBasket({ id: key }))} >
                  Remove
                </Text>
              </TouchableOpacity>

            </View>
          ))}
        </ScrollView>

        <View style={tw`p-5 bg-white mt-5 `}>
          <View style={tw`flex-row justify-between mt-2`}>
            <Text style={tw`text-gray-400 ml-2`}>Subtotal</Text>
            <Text style={tw`text-gray-400 ml-2`}>${basketTotal}</Text>
          </View>
        
        
          <View style={tw`flex-row justify-between mt-2`}>
            <Text style={tw`text-gray-400 ml-2`}>Service Charges</Text>
            <Text style={tw`text-gray-400 ml-2`}>$5.99</Text>
          </View>
        
        
          <View style={tw`flex-row justify-between mt-2 mb-2`}>
            <Text style={tw`text-black ml-2`}>Order Total</Text>
            <Text style={tw`font-extrabold text-black ml-2`}>${basketTotal + 5.99}</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("PreparingOrderScreen")} style={[tw`rounded-lg p-4`,  { backgroundColor: '#00CCBB' }]}>
            <Text style={tw`text-center text-white text-lg font-bold`}>Place Order</Text>
          </TouchableOpacity>
        
      </View>
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen

const styles = StyleSheet.create({})