import React from "react";
import { View,Text,StyleSheet } from "react-native";

const UserCard= props=>{

    return(
        <View style={styles.container}>
            <Text style={styles.username}>{props.username}</Text>
           <View> 
            <Text>{props.name}</Text>
        <Text style={styles.email}>{props.email}</Text>
        </View>
        </View>
    );

};
export default UserCard;

const styles= StyleSheet.create({

    container:{
        backgroundColor:"rgb(126,89,142)",
        marginVertical:5,
        padding:10,
        alignItems:"flex-start",

    },

    email:{
        fontSize:12,
        fontStyle:'italic',
        color:'gray',
        marginLeft:5,
    },

    username:{
        fontWeight:'bold',
    },
    inner_container:{
        flexDirection:"row",
        alignItems:"center",
    }
});