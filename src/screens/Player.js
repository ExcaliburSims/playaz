import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Icone from 'react-native-vector-icons/MaterialIcons';

const Player = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.maincontent}>
				{/* image */}

				{/* slider */}

				{/* panel controler */}
			</View>
			<View /* style={styles.maincontent} */>
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

export default Player

const styles = StyleSheet.create({
  container: {
		flex: 1,
		backgroundColor: '#1F172F',
		marginVertical: 0,
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