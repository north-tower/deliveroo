import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import { ScrollView } from 'react-native'
import tw from "tailwind-react-native-classnames"
import ResturantCard from './ResturantCard'

const FeaturedRow = ({id, title, description }) => {
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
        <ResturantCard
  id={13}
  imgUrl="https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3VzaGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  title="Amor"
  rating={4.5}
  genre="Japanese"
  address="Main Str"
  short_description="Best Delicacy"
  dishes={[
    { name: "Sushi", price: 12.99, image: "https://images.unsplash.com/photo-1622192308862-8032a315dd16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwZGlzaGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
    { name: "Pizza", price: 9.99, image: "https://images.unsplash.com/photo-1622192308862-8032a315dd16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwZGlzaGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }
  ]}
  long={10}
  lat={0}
/>


         <ResturantCard id={13} imgUrl="https://images.unsplash.com/photo-1622192308862-8032a315dd16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwZGlzaGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
         title="Moom Mam" rating={2.5} genre="Thai" address="Main Str" 
         short_description="Finger Licking" dishes={["Thai Rice","Greens"]} long={10} lat={0} />
<ResturantCard id={13} imgUrl="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdGVsJTIwZGlzaGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
         title="Pizzeria" rating={5.0} genre="Italian" address="Main Str" 
         short_description="Bon Appite" dishes={["Pizza","Rice"]} long={10} lat={0} />
<ResturantCard id={13} imgUrl="https://images.unsplash.com/photo-1459789034005-ba29c5783491?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
         title="Chez" rating={1.5} genre="Lebanese" address="Main Str" 
         short_description="Description" dishes={["Pizza","Rice"]} long={10} lat={0} />


      </ScrollView>
    </View>
  )
}

export default FeaturedRow

const styles = StyleSheet.create({})