import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native'
import React from 'react'
import Icone from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('screen');

const Player = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.maincontainer}>
				{/* image */}
				<View style={[styles.imagewrap, styles.elevation]}>
					<Image
						source={require('../assets/images/img2.jpg')}
						style={styles.musicimage}
					/>
				</View>
				{/* son title */}
				<View>
					<Text></Text>
					<Text></Text>
				</View>

				{/* slider */}

				{/* panel controler */}
			</View>
			<View style={styles.bottomcontainer}>
				<View style={styles.bottomcontainerwrap}>
				<TouchableOpacity>
				<Icone
						name="heart-outline"
						size={30}
						color="#88888888"
					/>
				</TouchableOpacity>
				<TouchableOpacity>
				<Icone
						name="repeat-outline"
						size={30}
						color="#88888888"
					/>
				</TouchableOpacity>
				<TouchableOpacity>
				<Icone
						name="share-outline"
						size={30}
						color="#88888888"
					/>
				</TouchableOpacity>
				<TouchableOpacity>
				<Icone
						name="ellipsis-horizontal"
						size={30}
						color="#88888888"
					/>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	)
}

export default Player

const styles = StyleSheet.create({
  container: {
		flex: 1,
		backgroundColor: '#1F172F',
	},
	maincontainer: {
		flex: 1,
		//backgroundColor: 'red',
		alignItems: 'center',
		justifyContent: 'center',
	},
	bottomcontainer: {
		//flexDirection: 'row',
		width: width,
		alignItems: 'center',
		paddingVertical: 15,
		borderWidth: 1,
		borderTopColor: '#393E46'
	},
	bottomcontainerwrap: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '80%',
	},
	imagewrap: {
		width: 300,
		height: 340,
		marginBottom: 25,
		borderRadius: 25,
		//backgroundColor: 'green',
	},
	musicimage: {
		width: '100%',
		height: '100%',
		borderRadius: 25,
	},
	elevation: {
		elevation: 5,
		shadowColor: '#ccc',
		shadowOffset: {
			width: 5,
			height: 5,
		},
		shadowOpacity: 0.5,
		shadowRadius: 3.84,
	},
})