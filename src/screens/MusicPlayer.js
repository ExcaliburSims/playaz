import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';

const MusicPlayer = () => {
	return (
		<View style={styles.container}>
			<Icon name="add-alert" size={30} color="#900" />
			<Text>Music Player</Text>
		</View>
	)
}

export default MusicPlayer


const styles = StyleSheet.create({
  container: {
		flex: 1,
		backgroundColor: '#555',
		alignItems: 'center',
		justifyContent: 'center',
  }
})