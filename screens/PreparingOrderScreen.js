import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import tw from 'tailwind-react-native-classnames';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from "@react-navigation/native"
import { useSelector } from 'react-redux';
import { selectResturant } from '../features/resturantSlice';

const PreparingOrderScreen = () => {
    const navigation = useNavigation();
    const resturant = useSelector(selectResturant);

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("DeliveryScreen");
        }, 4000);
    }, []);

  return (
    <SafeAreaView style={tw`flex-1 bg-green-400 justify-center items-center`}>
      <Animatable.Image
        source={require('../assets/gif.gif')}
        animation="slideInUp"
        iterationCount={1}
        style={tw`h-96 w-96`}
      />

      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        style={tw`text-lg my-10 text-white font-bold text-center`}
      >
        Waiting for your order to be accepted
      </Animatable.Text>

      <Progress.Circle size={60} indeterminate={true} color="white" unfilledColor='transparent' />
     
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;

const styles = StyleSheet.create({});
