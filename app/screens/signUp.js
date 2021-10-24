import { StatusBar } from "expo-status-bar";
import React, { useState, useRef, Component } from "react";
import { StyleSheet, Text, View, SafeAreaView, Platform, ImageBackground, Image, Button, Pressable, TextInput, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app';
//import firebaseConfig from '../../db/firebaseConfig.js';

initializeApp({
  apiKey: "AIzaSyCtSa-qK2xb-Wky_vszWWACyTqru9c9l94",
  authDomain: "voluntrack-ba589.firebaseapp.com",
  projectId: "voluntrack-ba589",
  storageBucket: "voluntrack-ba589.appspot.com",
  messagingSenderId: "237292785966",
  appId: "1:237292785966:web:8813a69013f743a1afaabf",
  measurementId: "G-KN9SKC5DYZ"
});

const signUp = ({ navigation }) => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [phone, setPhone] = useState(""); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const validateFields = (fName, lName, phoneNum, email, password, confirmPassword) => {
      if(!fName || !lName || !phoneNum || !email || !password || !confirmPassword) {
        alert(`Please fill out all fields`);
        return;
      }
      else {
        //more validation logic here
        //this.createUserWithEmailAndPassword(auth, email, password);
        alert('Valid');
      }
    }

    /*const validateFields = (fName, lName, phoneNum, email, password, confirmPassword) => {
        if(!(fName, lName, phoneNum, email, password, confirmPassword)){
          alert(`Please fill out all fields`);
          return;
        }
        else{
          //more validation logic here
          //this.createUserWithEmailAndPassword(auth, email, password);
          alert('Valid')
        }
      }*/

    //HAVE AUTH FUNCTION HERE, ON SUCCESS, LOG IN AND NAVIGATE TO DASHBOARD
    /*const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigation.navigate("Dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Error code ${errorCode}, message ${errorMessage}`);
        // ..
      });*/

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/logo.png")}/>
                <Text style={styles.titleText}>VolunTrack</Text>
            </View>
            <StatusBar style="auto"/>
            <View style={styles.inputContainer}>
                <View style={styles.inputView}>
                    <TextInput
                    style={styles.TextInput}
                    placeholder="Enter First Name"
                    placeholderTextColor="#003f5c"
                    autoCorrect="False"
                    autoCapitalize="words"
                    onChangeText={(fname) => setFname(fname)}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                    style={styles.TextInput}
                    placeholder="Enter Last Name"
                    placeholderTextColor="#003f5c"
                    autoCorrect="False"
                    autoCapitalize="words"
                    onChangeText={(lname) => setLname(lname)}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                    style={styles.TextInput}
                    placeholder="Enter Phone Number"
                    placeholderTextColor="#003f5c"
                    autoCorrect="False"
                    onChangeText={(phone) => setPhone(phone)}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                    style={styles.TextInput}
                    placeholder="Enter Email"
                    placeholderTextColor="#003f5c"
                    autoCorrect="False"
                    onChangeText={(email) => setEmail(email)}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                    style={styles.TextInput}
                    placeholder="Enter Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    autoCorrect="False"
                    onChangeText={(password) => setPassword(password)}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                    style={styles.TextInput}
                    placeholder="Confirm Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    autoCorrect="False"
                    onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
                    />
                </View>

                <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate("Login")}>
                    <LinearGradient
                        start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                        colors={['#FBD786', '#f7797d']} style={styles.signUpButton} 
                        onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.signUpText}>Sign Up</Text>
                    </LinearGradient>
                </TouchableOpacity>   
                <TouchableOpacity style={styles.signUpButton} onPress={() => this.validateFields(fname, lname, phone, email, password, confirmPassword)}>
                    <Text style={styles.signUpText}>Sign up</Text>
                </TouchableOpacity>



            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    titleText: {
        fontSize: 45,
        fontWeight: "bold",
    },
    logo: {
        width: 50,
        height: 50,
    },
    logoContainer: {
        position: "absolute", 
        top: 20,
        bottom: 70,
        alignItems: 'center',
    },
    inputView: {
        backgroundColor: "#edebec",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 5,
        marginTop: 15,
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    signUpButton: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
 
      },
    signUpText: {
        alignItems: 'center',
        justifyContent: "center",
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#f7f5ed',
    },
    inputContainer: {
        position: "absolute", 
        top: 150,
        width: "90%",
        alignItems: 'center',
    },
    linearGradient: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        marginTop: 40,
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
      },
});

export default signUp;