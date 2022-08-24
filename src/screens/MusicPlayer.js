import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import HeaderApp from '../components/Header';
import SliderApp from '../components/Slider';
import SliderApp2 from '../components/Slider2';

const MusicPlayer = () => {
	return (
		<SafeAreaView style={styles.container}>
			<HeaderApp />
			<View style={styles.maincontent}>
				<SliderApp />
				<SliderApp2 />
				<SliderApp2 />
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
		marginVertical: 15,
		//backgroundColor: 'red',
		alignItems: 'center',
		justifyContent: 'center',
	},
	picture: {
		width: 200,
		height: 200,
		borderRadius: 31,
	},
})