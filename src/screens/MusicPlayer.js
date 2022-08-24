import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import HeaderApp from '../components/Header';

const MusicPlayer = () => {
	return (
		<SafeAreaView style={styles.container}>
			<HeaderApp />
			<View style={styles.maincontent}>
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
	},
	maincontent: {
		alignItems: 'center',
		justifyContent: 'center',
	}
})