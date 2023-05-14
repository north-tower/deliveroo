import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import { ScrollView } from 'react-native'
import tw from "tailwind-react-native-classnames"
import ResturantCard from './ResturantCard'

const FeaturedRow3 = ({id, title, description }) => {
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
        <ResturantCard id={13} imgUrl="https://images.unsplash.com/photo-1600147184950-b0a367a98bc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGtmY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
         title="Nuggets" rating={4.5} genre="American" address="Main Str" 
         short_description="Description" dishes={[]} long={10} lat={0} />
         <ResturantCard id={13} imgUrl="https://images.unsplash.com/photo-1644032982093-b4a7b38935ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGtmY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
         title="Burgers" rating={4.0} genre="German" address="Main Str" 
         short_description="Description" dishes={[]} long={10} lat={0} />
<ResturantCard id={13} imgUrl="https://images.unsplash.com/photo-1542488246-1390a9a99a30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2ZjfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
         title="KFC" rating={5.0} genre="French" address="Main Str" 
         short_description="Description" dishes={[]} long={10} lat={0} />
<ResturantCard id={13} imgUrl="https://images.unsplash.com/photo-1642413960687-41345eb83cb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hYyUyMGRvbmFsZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
         title="Mac" rating={5.0} genre="American" address="Main Str" 
         short_description="Description" dishes={[]} long={10} lat={0} />


      </ScrollView>
    </View>
  )
}

export default FeaturedRow3

const styles = StyleSheet.create({})