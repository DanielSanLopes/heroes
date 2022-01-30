import React, { Component, useState } from 'react';
import {StyleSheet, View, Appearance, Image, Text, Platform, Button, Pressable, TextInput, ViewComponent, ScrollView, FlatList, TouchableNativeFeedback, TouchableOpacity, 
useColorScheme} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { functionDeclaration } from '@babel/types';
import PropTypes from 'prop-types';

import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';




export default function Hero({char}){
  
    var image = char.thumbnail.path
    var req = false

    const isDarkMode = useColorScheme() === 'dark'

    if (image == 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available')
        req = true
        
    else
        image = char.thumbnail.path+'/standard_xlarge.jpg'
    
    
    return (
        <TouchableOpacity  style = {{borderWidth:0, borderRadius:45, flexDirection:'row', justifyContent:'flex-start', alignItems:'center', alignSelf:'center', 
        width:'90%', marginVertical:10}}>
           
           <Image resizeMode = {'contain'} style={{ height:75, width: 75, borderRadius:45, marginRight:20}} source= {req?require('./unavailable.jpg'):{uri: image}}/>
            <Text style={{color: isDarkMode ? Colors.white : Colors.black}}>{char.name}</Text>
        </TouchableOpacity>

    );
}

