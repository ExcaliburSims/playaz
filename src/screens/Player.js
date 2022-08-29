import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Dimensions, Image, FlatList } from 'react-native'
import React from 'react'
import Icone from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';
import data from '../model/data';

const { width, height } = Dimensions.get('screen');

const Player = () => {
	const renderItem = ({ item, index }) => (
		<View style={styles.mainimagewrap}>
			<View style={[styles.imagewrap, styles.elevation]}>
				<Image
					source={item.artwork}
					style={styles.musicimage}
				/>
			</View>
		</View>
  );
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.maincontainer}>
				{/* image */}
				<FlatList
					data={data}
					renderItem={renderItem}
					keyExtractor={item => item.id}
					horizontal
					pagingEnabled
					showsHorizontalScrollIndicator={false}
					scrollEventThrottle={16}
      	/>
				{/* son title */}
				<View>
					<Text style={[styles.songContent, styles.songTitle]}>some Title</Text>
					<Text style={[styles.songContent, styles.songArtist]}>some Artist Name</Text>
				</View>

				{/* slider */}
				<View>
					<Slider
						style={styles.progressBar}
						value={20}
						minimumValue={0}
						maximumValue={100}
						thumbTintColor="#FFD369"
						minimumTrackTintColor="#FFD369"
						maximumTrackTintColor="#FFF"
						onSlidingComplete={() => {}}
					/>
				</View>
				{/* progress duration */}
				<View style={styles.progressDuration}>
					<Text style={styles.progressLabel}>00:00</Text>
					<Text style={styles.progressLabel}>00:00</Text>
				</View>

				{/* panel controler */}
				<View style={styles.musicControl}>
					<TouchableOpacity>
						<Icone
							name="play-skip-back-outline"
							size={30}
							color="#FFD369"
						/>
					</TouchableOpacity>
					<TouchableOpacity>
						<Icone
							name="ios-pause-circle"
							size={75}
							color="#FFD369"
						/>
					</TouchableOpacity>
					<TouchableOpacity>
						<Icone
							name="play-skip-forward-outline"
							size={30}
							color="#FFD369"
						/>
					</TouchableOpacity>
				</View>
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
	songContent: {
		textAlign: 'center',
		color: '#ccc',
	},
	songTitle: {
		fontSize: 18,
		fontWeight: '600',
	},
	songArtist: {
		textAlign: 'center',
		color: '#EEEEEE',
		fontSize: 16,
		fontWeight: '300',
	},
	progressBar: {
		width: 300,
		height: 40,
		marginTop: 25,
		flexDirection: 'row',
	},
	progressDuration: {
		width: 270,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	progressLabel: {
		color: '#fff',
		fontWeight: '300',
	},
	musicControl: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '50%',
	},
	mainimagewrap: {
		width: width,
		justifyContent: 'center',
		alignItems: 'center',
	}
})