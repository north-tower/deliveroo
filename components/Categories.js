import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView horizontal contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
    }} showsHorizontalScrollIndicator={false}
    >
        <CategoryCard imgUrl="https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRpc2NvdW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
         title="Offers"/>
        <CategoryCard imgUrl="https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
         title="Pizza"/>
        <CategoryCard imgUrl="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGhhaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
         title="Thai"/>
        <CategoryCard imgUrl="https://images.unsplash.com/photo-1615361200098-9e630ec29b4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3VzaGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
         title="Sushi"/>
        <CategoryCard
         imgUrl="https://images.unsplash.com/photo-1503764654157-72d979d9af2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXNpYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          title="Asian"/>
        <CategoryCard imgUrl="https://plus.unsplash.com/premium_photo-1673439307239-f30b4f467d35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXRhbGlhbiUyMCUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
         title="Italian"/>
        <CategoryCard imgUrl="https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZnJlbmNoJTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
         title="French"/>
        <CategoryCard imgUrl="https://images.unsplash.com/photo-1555126634-323283e090fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2hpbmVzZSUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
         title="Chinese"/>
        <CategoryCard imgUrl="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWZyaWNhbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
         title="African"/>
    
    
    </ScrollView>

      
  )
}

export default Categories

const styles = StyleSheet.create({})