import { StatusBar } from "react-native";
import React from "react"
import {StyleSheet, Text, View} from 'react-native'
import {WebView} from "react-native-webview"

const Mwebview =({ route })=>{

    return(

<WebView 
  style={styles.container}
  source={{uri:route.params.uri}}
/>

 )
}

const styles = StyleSheet.create({

    container: {flex:1,
        flexDirection:'column',
        justifyContent: "center",
        alignItems:"center"

    }

})

export default Mwebview;