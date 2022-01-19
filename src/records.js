import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Inputs extends Component {
   state = {
      email: '',
      password: ''
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (email, pass) => {
      alert('email: ' + email + ' password: ' + pass)
   }
   render() {
      return (
        <View style={styles.wrapper}>
        <View style = {styles.container}>
        <Text > Name : James Priest </Text>
        </View>
        <View style = {styles.container}>

        <TextInput style = {styles.input}
        underlineColorAndroid = "transparent"
        placeholder = "Email"
        placeholderTextColor = "#9a73ef"
        autoCapitalize = "none"
        onChangeText = {this.handleEmail}/>

        <TextInput style = {styles.input}
        underlineColorAndroid = "transparent"
        placeholder = "Password"
        placeholderTextColor = "#9a73ef"
        autoCapitalize = "none"
        onChangeText = {this.handlePassword}/>
        </View>
         <View style = {styles.container}>
         <Text > Self Excluded </Text>
         </View>
         <View style = {styles.selfcontainer}>
        <TouchableOpacity
        style = {styles.submitButton}
        onPress = {
          () => this.login(this.state.Notes, this.state.Notes)
        }>
        <Text style = {styles.submitButtonText}> Notes </Text>
        </TouchableOpacity>
          <TouchableOpacity
        style = {styles.submitButton}
        onPress = {
          () => this.login(this.state.Photo, this.state.Photo)
        }>
        <Text style = {styles.submitButtonText}> Photo </Text>
        </TouchableOpacity>


         <TouchableOpacity
        style = {styles.submitButton}
        onPress = {
          () => this.login(this.state.Audio, this.state.Audio)
        }>
        <Text style = {styles.submitButtonText}> Audio </Text>
        </TouchableOpacity>

        </View>

        <View style = {styles.selfcontainer}>
         <TouchableOpacity
        style = {styles.submitButton}
        onPress = {
          () => this.login(this.state.email, this.state.password)
        }>
        <Text style = {styles.submitButtonText}> Video </Text>
        </TouchableOpacity>
        <TouchableOpacity
        style = {styles.submitButton}
        onPress = {
          () => this.login(this.state.email, this.state.password)
        }>
        <Text style = {styles.submitButtonText}> Break </Text>
        </TouchableOpacity>
        <TouchableOpacity
        style = {styles.submitButton}
        onPress = {
          () => this.login(this.state.email, this.state.password)
        }>
        <Text style = {styles.submitButtonText}> Escale </Text>
        </TouchableOpacity>
        </View>
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
    flexDirection: 'row',
     padding: 10,
   },
   selfcontainer: {
    flexDirection: 'row',
     padding: 0,
   },
    wrapper: {
    flex: 1
  },
   input: {
      marginRight: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1,
      width:180,
      flexDirection: 'row',

   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 10,
      height: 40,

   },
   submitButtonText:{
      color: 'white'
   }
})