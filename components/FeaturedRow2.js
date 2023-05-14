import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import { ScrollView } from 'react-native'
import tw from "tailwind-react-native-classnames"
import ResturantCard from './ResturantCard'

const FeaturedRow2 = ({id, title, description }) => {
  return (
    <View>
      <View style={tw`mt-4 flex-row items-center justify-between px-4`}>
        <Text style={tw`font-bold text-black text-lg`}>
            {title}
        </Text>
        <ArrowRightIcon color="#00bbcc" />
      </View>
      <Text style={tw`text-xs text-gray-500 px-4`}>{description}</Text>
      <ScrollView horizontal contentContainerStyle={{
        paddingHorizontal: 15,
      }} showsHorizontalScrollIndicator={false} style={tw`pt-4`} >
        <ResturantCard id={13} imgUrl="https://images.unsplash.com/photo-1601313054536-4ffa26587696?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
         title="African" rating={4.5} genre="Africa" address="Main Str" 
         short_description="Description" dishes={[]} long={10} lat={0} />
         <ResturantCard id={13} imgUrl="https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
         title="Saidonnue" rating={3.0} genre="Lebanese" address="Main Str" 
         short_description="Description" dishes={[]} long={10} lat={0} />
<ResturantCard id={13} imgUrl="https://images.unsplash.com/photo-1531088009183-5ff5b7c95f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
         title="Brunch Discounts" rating={5.0} genre="French" address="Main Str" 
         short_description="Description" dishes={[]} long={10} lat={0} />
<ResturantCard id={13} imgUrl="https://images.unsplash.com/photo-1523798724321-364e1951df59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8a2ZjfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
         title="Kfc" rating={1.5} genre="American" address="Main Str" 
         short_description="Description" dishes={[]} long={10} lat={0} />


      </ScrollView>
    </View>
  )
}

export default FeaturedRow2

const styles = StyleSheet.create({})