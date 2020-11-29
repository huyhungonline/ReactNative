
import  React, {useState} from 'react';
import { Button, View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  axios from "axios";
import Constants from 'expo-constants';
function LoginScreen({ navigation }) {
    const [username,setusername] = useState("");
    const  onChangeUsername = text=>{
      setusername(text)
    }
    const [password,setpassword] = useState("");
    const  onChangePassword = text=>{
      setpassword(text)
    }
    function login() {
        //   navigation.navigate("Home")
        axios.post('https://kansaibook.com/api/login', {
            user_name: 'username',
            password: '1234'
          })
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <View style={styles.container}>
        <Text style={styles.titleText}> Login</Text>
        <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} onChangeText={text => onChangeUsername(text)}/>
        <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} onChangeText={text => onChangePassword(text)} />
        <Button
          title="Press me"
          onPress={() => login()}
        />
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
 export default LoginScreen;