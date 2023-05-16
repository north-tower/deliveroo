import { StyleSheet, Text, View , SafeAreaView, TouchableOpacity, Image} from 'react-native'
import React, {useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectResturant } from '../features/resturantSlice';
import { useNavigation } from "@react-navigation/native"
import { selectBasketItems } from '../features/basketSlice';
import { XCircleIcon } from 'react-native-heroicons/solid';
import tw from "tailwind-react-native-classnames"

const BasketScreen = () => {
  const navigation = useNavigation();
  const resturant = useSelector(selectResturant);
  const items = useSelector(selectBasketItems);
  const dispatch = useDispatch;
  const [ groupedItemsInBasket, setGroupedItemsInBasket ]  = useState([]);

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[items.id] = results[items.id] || []).push(item);
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
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen

const styles = StyleSheet.create({})