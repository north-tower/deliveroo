import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import tw from "tailwind-react-native-classnames"

const CategoryCard = ({ imgUrl, title}) => {
  return (
    <TouchableOpacity style={tw`relative mr-2`}>
        <Image source={{
            uri: imgUrl,
        }}
        style={tw` h-20 w-20 rounded`}
        />
        <Text style={tw`absolute bottom-1 left-1 text-white font-bold`}>
            {title}
        </Text>

    </TouchableOpacity>
  )
}

export default CategoryCard

const styles = StyleSheet.create({})