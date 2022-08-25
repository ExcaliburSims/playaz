import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native'
import React from 'react'
import Icone from 'react-native-vector-icons/MaterialIcons';

const ControlMin = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.maincontent}>
				<Icone
						name="close"
						size={30}
						color="white"
				/>
				<Icone
						name="fast-rewind"
						size={30}
						color="white"
				/>
				<Image
						style={styles.picture}
						source={require('../assets/images/img1.jpg')}
					/>
				<Icone
						name="pause"
						size={30}
						color="white"
				/>
				<Icone
						name="fast-forward"
						size={30}
						color="white"
					/>
			</View>
		</SafeAreaView>
	)
}

export default ControlMin

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'center',
		backgroundColor: 'green',
		alignItems: 'center',
	},
	maincontent: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: 'red',
		alignItems: 'center',
		width: 300,
	},
	picture: {
		width: 50,
		height: 50,
		borderRadius: 25,
	},
})