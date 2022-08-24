import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';

const MusicPlayer = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View>
				<Icon name="add-alert" size={30} color="#900" />
				<Text>Music Player</Text>
			</View>
		</SafeAreaView>
	)
}

export default MusicPlayer


const styles = StyleSheet.create({
  container: {
		flex: 1,
		backgroundColor: '#1F172F',
		alignItems: 'center',
		justifyContent: 'center',
  }
})