/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  Modal,
  ImageBackground
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Hero from './components/HeroItem';
import counter from '../native-components/src/Counter';




const App = () => {

  const defaultURL = "https://gateway.marvel.com/v1/public/characters"
  const timeStamp = '1643386573'
  const publicKey = 'f8204b9a06968ea0f2ca86d5e6cd4c2e'
  const hash = 'bd29a6a5f367fb13f1774f1b63e52104'

  const [charac, setCharac] = useState([])

  var char = []

  const [total, setTotal] = useState()
  const [visibleModal, setVisibleModal] = useState(false)
  
  
  //_________________________________________________________________________________________________________________________________________________
  useEffect(()=> {RequireHeroes() },[hash])
   


  async function RequireHeroes(){
   
    let response = await fetch (defaultURL+'?nameStartsWith=A&ts='+timeStamp+'&apikey='+publicKey+'&hash='+hash, {
      METHOD: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).catch(((error)=>console.error(error)))

    if (response){
      let res = await response.json()
      char = [...res.data.results]

      setCharac([...char])      
      setTotal(counter(char))
      char.map ((item)=>console.log(item))     
     
      

      //console.log(char[0].thumbnail.path)
    }

  }
  //_________________________________________________________________________________________________________________________________________________

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  

  return (    
      
    <ScrollView style={backgroundStyle} contentInsetAdjustmentBehavior="automatic">
      <Header/>
  
        <View style={{height:50}}/>

        <Text style={{textAlign:'center', fontSize:20, fontWeight:'500'}}>Total de {total} Heróis</Text>

        <FlatList style={{}}
        contentContainerStyle={{marginVertical:5}}
        data={charac}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <Hero char={item}/>}>
        </FlatList>     

        
      
     
    </ScrollView>
    
  );
};


export default App;
