import * as React from 'react';
import { View,Text,Button,StyleSheet } from 'react-native';

export default  function HomeScreen({ navigation }) {
  return (

      <View style={styles.wrapper}>
        <View style={styles.container2}>

        </View>
        <View style={styles.container}>
            <View style={[styles.box, styles.box1]}><Text  onPress={() => navigation.navigate('Floor-Insight')}>Floor Insight</Text></View>
            <View style={[styles.box, styles.box2]}><Text onPress={() => navigation.navigate('records')}>Search Member</Text></View>
            <View style={[styles.box, styles.box3]}><Text>Escalate</Text></View>
        </View>
        <View style={styles.container2}>
            <View style={[styles.box, styles.box4]}><Text>Admin</Text></View>
            <View style={[styles.box, styles.box2]}><Text>Support</Text></View>
        </View>

    </View>
  );
}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 0,
    flexDirection: 'row',
   justifyContent: 'center',
     fontSize: 40,
  },
  container2: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    padding:10,
    margin:20,
     fontSize: 24,
    fontWeight: '600',

  },
  box1: {
    backgroundColor: '#edeeef',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    fontWeight: '600',
  },
  box2: {
    backgroundColor: '#edeeef',
    justifyContent: 'center',
     alignItems: 'center',
  },
  box3: {
    backgroundColor: '#edeeef',
    justifyContent: 'center',
     alignItems: 'center',
  },
   box4: {
    backgroundColor: '#edeeef',
    justifyContent: 'center',
     alignItems: 'center',
  },
  HeaderTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});