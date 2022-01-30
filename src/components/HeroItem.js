import React, { Component, useState } from 'react';
import {StyleSheet, View, Appearance, Image, Text, Platform, Button, Pressable, TextInput, ViewComponent, ScrollView, FlatList, TouchableNativeFeedback, TouchableOpacity, 
useColorScheme, Modal, ImageBackground} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { functionDeclaration } from '@babel/types';
import PropTypes from 'prop-types';

import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';




export default function Hero(props){
  
    var image = props.char.thumbnail.path
    var req = false

    const isDarkMode = useColorScheme() === 'dark'

    const [visible, setVisible] = useState(false)

    if (image == 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available')
        req = true
        
    else
        image = props.char.thumbnail.path+'/standard_xlarge.jpg'
    
    
    return (
        <View>
            <TouchableOpacity onPress={()=>setVisible(true)}  style = {{borderWidth:0, borderRadius:45, flexDirection:'row', justifyContent:'flex-start', alignItems:'center', alignSelf:'center', 
            width:'90%', marginVertical:10} }>
            
            <Image resizeMode = {'contain'} style={{ height:75, width: 75, borderRadius:45, marginRight:20}} source= {req?require('./unavailable.jpg'):{uri: image}}/>
                <Text style={{color: isDarkMode ? Colors.white : Colors.black}}>{props.char.name}</Text>
            </TouchableOpacity>



            <Modal animationType='slide' visible={visible} transparent={false} style={{alignContent:'center',  justifyContent:'center', flexDirection:'row'}} >
                <TouchableOpacity onPress={()=>setVisible(false)} style={{flex:1}}> 
                    <ImageBackground source={req?require('./unavailable.jpg'):{uri: image}} style={{flex:0.5, marginTop:'40%'}}/>
                    <Text style={{color: isDarkMode ? Colors.white : Colors.black, textAlign:'center', fontSize:20, fontWeight:'bold'}}>{props.char.name}</Text>
                    <Text style={{textAlign:'center', margin:15}}>Descrição:</Text>
                    <Text style={{textAlign:'center', margin:15}}>{props.char.description?props.char.description:"None"}</Text>

                    
                </TouchableOpacity>
            </Modal>
        </View>

        

    );
}

