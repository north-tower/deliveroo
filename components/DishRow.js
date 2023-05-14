import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames"

const DishRow = ( {id, name, description, price, image }) => {
  return (
    <TouchableOpacity>
        <Text style={tw`text-lg mb-1`}>
            {name}
         </Text>
         <Text style={tw`text-gray-400`}>
            {description}
         </Text>

    </TouchableOpacity>
  )
}

export default DishRow

const styles = StyleSheet.create({})