import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import React from 'react'

const SliderApp2 = () => {
	return (
		<SafeAreaView>
			<View>
				<Text>Playlist</Text>
				<Image
					style={styles.picture}
					source={require('../assets/images/img1.jpg')}
				/>
			</View>
		</SafeAreaView>
	)
}

export default SliderApp2

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