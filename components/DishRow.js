import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import tw from "tailwind-react-native-classnames"
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';


const DishRow = ( {id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <>
      <TouchableOpacity onPress={() => setIsPressed(!isPressed)}
       style={tw`bg-white border p-4 border-gray-200 ${isPressed && "border-b-0"}`}>
        <View style={tw`flex-row`}>
          <View style={tw`flex-1 pr-2`}>
            <Text style={tw`text-lg text-black mb-1`}>
                {name}
            </Text>
            <Text style={tw`text-gray-400`}>
                {description}
            </Text>
            <Text style={tw`text-gray-400 mt-2`}>{price}</Text>
          </View>
        
        <View>
          <Image source={{ uri: image }}   
          style={tw`h-20 w-20 bg-gray-300 p-4 `}  />
        </View>
        </View>
      </TouchableOpacity>

      {isPressed &&(
        <View style={tw`bg-white px-4`}>
          <View style={tw`flex-row items-center pb-3`}>
            <TouchableOpacity>
              <MinusCircleIcon color={"#00ccbb"} 
              size={40} />
            </TouchableOpacity>

            <Text style={tw`text-black`}>0</Text>

            <TouchableOpacity>
              <PlusCircleIcon size={40} color={"#00ccbb"}/>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  )
}

export default DishRow

const styles = StyleSheet.create({})