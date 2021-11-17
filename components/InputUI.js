import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';


const InputUI = ({navigation}) => {
  const [text, onChangeText] = React.useState('http://192.168.1.214:3000');

  return (
    <>
      <View style={styles.container}>

        <Text style={styles.tText}>Indtast din server adresse</Text>

        <TextInput
          style={styles.mInput}
          onChangeText={onChangeText}
          value={text}
        />

        <TouchableOpacity 
        style={styles.mBut}
        onPress={() =>
          navigation.navigate('myWebview', { url: text })
       }
        
        >
<Text style={styles.mText}>Hent Webview</Text>
        </TouchableOpacity>

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  mInput: {
    height: 50,
    width: 400,
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 20,
  },
  mBut: {
    alignItems: "center",
    backgroundColor: "#426A8C",
    borderRadius:8,
    marginTop:10,
    padding: 10,
    width:200
    },
    mText:{
      color:"#ffffff",
      fontWeight:"bold",
      fontSize:20,
  
  
  }
});

export default InputUI;
