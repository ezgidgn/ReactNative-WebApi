import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text,ActivityIndicator, View,FlatList } from 'react-native';
import axios from 'axios';

import UserCard from './src/components/UserCard/UserCard';

const URL ="https://jsonplaceholder.typicode.com/users"

export default function App() {

  const [userList, setUserList]= useState([]);
  const [loading, setLoading]=useState(false);

  async function fetchData(){

       setLoading(true);
       const response = await axios .get(URL) // sistemin ne zaman çalışacağını bilemez o yüzden ilk baş blok çalışır bloğun--içinde olmasına rağmen sonra çalışır.
       console.log(response);  
       setLoading(false); 
       
       setUserList(response.data);
    
  }

  const renderUser=({item})=> 
  (< UserCard name ={item.name} email={item.email} username={item.username}/>
  );

useEffect(()=>{
  fetchData()
},[])
  
  return (

    <View>
     
     {loading? (<ActivityIndicator size='large'/>
     ):(
     
     <FlatList 
        data={userList}
        renderItem={renderUser} />

     )}
      
      <Button title="Fetch Data" onPress={fetchData}/>
      <Text>Ezgi</Text>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
