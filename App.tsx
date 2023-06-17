import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from './src/theme/colors';
import AntDesign from 'react-native-vector-icons/AntDesign'
const App = () => {
  return (
    <View style={styles.container}>
      <Text>App</Text>
      <AntDesign name="stepforward" size={25} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
});
