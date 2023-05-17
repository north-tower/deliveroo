import { View, Text, SafeAreaView, TouchableOpacity , Image} from 'react-native'
import React from 'react'
import {useNavigation } from "@react-navigation/native"
import { useSelector } from 'react-redux';
import { selectResturant } from '../features/resturantSlice';
import tw from "tailwind-react-native-classnames"
import { XMarkIcon } from 'react-native-heroicons/solid';
import * as Progress from "react-native-progress"
import MapView from 'react-native-maps';




const DeliveryScreen = () => {
    const navigation = useNavigation();
    const resturant = useSelector(selectResturant);

  return (
    <View style={tw`bg-green-400  flex-1`}> 
        <SafeAreaView style={tw`z-50`}>
            <View style={tw`flex-row justify-between items-center p-5`}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <XMarkIcon color="white" size={30} />
                </TouchableOpacity>
                <Text style={tw`font-light text-white text-lg`}>
                        Order Help
                </Text>

            </View>
            <View style={tw`bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md`}>
                <View style={tw`flex-row justify-between`}>
                    <View>
                        <Text style={tw`text-lg text-gray-400`}>
                            Estimated Arrival
                        </Text>
                        <Text style={tw`text-4xl text-black font-bold`}>40-50 Minutes</Text>
                    </View>
                        <Image source={{ uri: "https://links.papareact.com/fls"}} 
                        style={tw`h-20 w-20`} />
                    </View>

                    <Progress.Bar size={30} color="green" indeterminate={true} />
                    <Text style={tw`mt-3 text-gray-500`}>
        Your order at {resturant.title} is being prepared
      </Text>
                </View>
            

        </SafeAreaView>
        {/* <MapView
  initialRegion={{
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
/> */}
    </View>
  )
}

export default DeliveryScreen