import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, ImageBackground, Image, Button, Pressable, TextInput, TouchableOpacity} from 'react-native';
import QRCode from "react-qr-code";

const QRCode = ({ route, navigation }) => {
    // const { codeProp } = props
    // const code = codeProp;
    let { eventCode } = route.params
    //console.log(eventCode)
    //eventCode = String(eventCode)
    return (
        <View style={styles.cont}>

            <View style={styles.container}>
                <QRCode value = {String(eventCode)} />
                <TouchableOpacity style={styles.saveButton}>
                    <Text style={styles.saveText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.shareButton} >
                    <Text style={styles.shareText}>Share</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate("Dashboard")}>
                <Text style={styles.homeText}>Go Home</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
    },
    saveButton: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FF1493",
        marginBottom: 30,
        marginTop: 200,
    },
    saveText: {
        alignItems: 'center',
        justifyContent: "center",
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    shareButton: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FF1493",
    },
    shareText: {
        alignItems: 'center',
        justifyContent: "center",
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    homeButton: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FF1493",
    },
    homeText: {
        alignItems: 'center',
        justifyContent: "center",
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});

export default QRCode;