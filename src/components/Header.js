import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icone from 'react-native-vector-icons/MaterialIcons';

const HeaderApp = props => {
  return (
    <View style={styles.container}>
      <View style={styles.boxHeader}>
        <Icone
          name="queue-music"
          size={30}
          color="white"
        />
        <Text style={styles.titleText}>
          Playaz
        </Text>
        <Icone name="search" size={30} color="white" />
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    //backgroundColor: '#1F172F',
		backgroundColor: 'green',
    height: '7%',
    justifyContent: 'center',
  },
  boxHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  titleText: {
    color: 'white',
    fontFamily: 'Poppins-Bold',
    fontSize: 25,
    fontWeight: '600',
    letterSpacing: 0.1,
    textAlign: 'left',
  },
});
export default HeaderApp;
