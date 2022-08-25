import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ControlMin = () => {
	return (
		<View style={styles.maincontent}>
			<Text>controlMin</Text>
		</View>
	)
}

export default ControlMin

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1F172F',
	},
	maincontent: {
		marginVertical: 50,
		backgroundColor: 'red',
		alignItems: 'center',
		justifyContent: 'center',
	},
	picture: {
		width: 200,
		height: 200,
		borderRadius: 31,
	},
})