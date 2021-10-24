import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { Camera } from 'expo-camera';
import { BarCodeScanner, Permissions } from 'expo';

const Join = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [data, setData] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);


  useEffect(() => {
    (async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      setHasPermission(status === 'granted');
    })();
  }, []);

  // const handleBarCodeScanned = ({ type, data }) => {
  //   setScanned(true);
  //   alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  // };

  _handleBarCodeRead = result => {
    if (data !== this.state.lastScannedUrl) {
      LayoutAnimation.spring();
      setData(result.data);
      alert(`Bar code with type ${result.type} and data ${result.data} has been scanned!`);
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <BarCodeScanner onBarCodeRead={this._handleBarCodeRead} style={styles.camera} type={type} barCodeScannerSettings={{barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr]}}>
        <View style={styles.buttonContainer}>
        </View>
      </BarCodeScanner>
    </View>
  );
};
var device = Dimensions.get('window');
const styles = StyleSheet.create({
  camera: {
    // flex: 1,
    width: 0.8*(device.width),
    height: 0.8*(device.width)
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: 130,
    borderRadius: 4,
    backgroundColor: '#14274e',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
// const styles = StyleSheet.create({
//     center: {
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//       textAlign: "center",
//     },
// });

export default Join;