import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const MusicPlayer = () => {
	return (
		<View style={styles.container}>
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