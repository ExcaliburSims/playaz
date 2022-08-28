import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import Icone from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('screen');

const Player = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.maincontainer}>
				{/* image */}

				{/* slider */}

				{/* panel controler */}
			</View>
			<View style={styles.bottomcontainer}>
				<View style={styles.bottomcontainerWrap}>
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
	bottomcontainerWrap: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '80%',
	},
})