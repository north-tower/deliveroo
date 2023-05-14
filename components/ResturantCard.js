


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import tw from "tailwind-react-native-classnames"
import { StarIcon } from 'react-native-heroicons/solid'
import { MapPinIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'

const ResturantCard = ({
       id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat,
}) => {
    const navigation = useNavigation();

  return (
    <TouchableOpacity
    onPress={() => {
        navigation.navigate("Resturant", {id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat,

        });
    }}
     style={tw`bg-white mr-3 shadow`}>
           <Image source={{ uri: imgUrl, }} style={tw`h-36 w-64 rounded-sm`} />
            <View style={tw`px-3 pb-4`}>
                 <Text style={tw`font-bold text-black text-lg pt-2`}>
                     {title}
                 </Text>
                 <View style={tw`flex-row items-center p-1 `}>
                     <StarIcon color="green" opacity={0.5} size={22} />
                     <Text style={tw`text-xs text-gray-500`}>
                         <Text style={tw`text-green-500`}>{rating}</Text> * {genre}  </Text>
                 </View>
    
                 <View style={tw`flex-row items-center p-1`}>
                     <MapPinIcon color="gray" opacity={0.4} size={22} />
                     <Text style={tw`text-xs text-gray-400`}>Nearby * {address}</Text>
                 </View>
             </View>
    
    
         </TouchableOpacity>
  )
}

export default ResturantCard

const styles = StyleSheet.create({})
