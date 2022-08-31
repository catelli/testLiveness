import React from 'react';
import type {Node} from 'react';

import {StyleSheet, View, Text, Button, Alert} from 'react-native';
import {
  startLiveness3d,
  resultFaceCaptcha,
} from '@oiti/liveness3d-react-native';

const App: () => Node = () => {
  const appKey =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjZXJ0aWZhY2UiLCJ1c2VyIjoiMUVFQ0U3MjQ0Qjg3NUMyRTVGQUUyODVDQTdCOTVCRTdDMTM2fHNhZnJhLmVwZi5obWwiLCJlbXBDb2QiOiIwMDAwMDAwNTc2IiwiZmlsQ29kIjoiMDAwMDAwMjY2MiIsImNwZiI6IjA4NjcwODMzOTU2Iiwibm9tZSI6IjIwNzUxQkYwRkRCMEJGNUFDQUVBNEM3ODA0REI0MjE4RTQ0QjZBRDczNzNFODU1QzQxRThEMDcwMTMxM0U1NDg0QjNCNTAwNzE0MjI5MjBFOTBGMEUxRkRENTczQjU4RTEyMDY2NjZBNDQ0Qzg4QzkzRUZCQzQ5NzVDODIyOXxHQUJSSUVMIENBVEVMTEkgR09VTEFSVCIsIm5hc2NpbWVudG8iOiIwOC8xMC8xOTk2IiwiZWFzeS1pbmRleCI6IkFBQUFFcHNOS0JEZjFOSUVWVnFEL1ZiRmIzcSt4YXp3c0FqN0F3YUdaUkswQkJOcnp6Y2FORDN0aUVnTHRnPT0iLCJrZXkiOiJUM1YwSUcxaGVTQm1aWGNnYm05eWRHaDNZWEprSUdKbGJHbGxkbWx1WnlCaGRIUT0iLCJleHAiOjE2NTg0NDMzMjcsImlhdCI6MTY1ODQ0MTUyN30.xHz_yikzMr1buoowQe5PJctd3N-sGfF3EuSisGn9TpY';

  async function getResultFace(appKey) {
    const resultLiveness3D = await resultFaceCaptcha(appKey);
    Alert.alert(JSON.stringify(resultLiveness3D));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.box}>Exemplo Oiti - React Native</Text>
      <View style={styles.button}>
        <Button
          onPress={() => {
            startLiveness3d(appKey).then(
              result => {
                result && getResultFace(appKey);
              },
              error => {
                console.log(error);
              },
            );
          }}
          title="Liveness 3D"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    marginVertical: 20,
  },
  button: {
    marginVertical: 5,
  },
  boxResult: {
    marginVertical: 10,
  },
});

export default App;
