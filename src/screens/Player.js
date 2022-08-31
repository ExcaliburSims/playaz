import React, {useEffect, useRef, useState} from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Dimensions, Image, FlatList, Animated } from 'react-native'
import TrackPlayer, {Capability, Event, RepeatMode, State,usePlaybackState, useProgress, useTrackPlayerEvents} from 'react-native-track-player';
import Icone from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';
import data from '../model/data';

const { width, height } = Dimensions.get('screen');

const setUpPlayer = async () => {
	try {
		await TrackPlayer.setupPlayer();
		await TrackPlayer.add(data);
	} catch (e) {
		console.log(e);
	}
}

const togglePlayBack = async playBackState => {
	const currentTrack = await TrackPlayer.getCurrentTrack();
	if (currentTrack != null) {
		if (playBackState == State.Paused) {
			await TrackPlayer.play();
		} else {
			await TrackPlayer.pause();
		}
	}
}

const Player = () => {
	const playBackState = usePlaybackState();
	const [songIndex, setSongIndex] = useState(0)
	const scrollX = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		setUpPlayer();
		scrollX.addListener(({ value }) => {
			//console.log(`ScrollX : ${value} | Device Width : ${width}`);
			const index = Math.round(value / width);
			//console.log(index);
			setSongIndex(index);
			return () => TrackPlayer.destroy();
		})
	}, [])
	
	
	const renderItem = ({ item, index }) => (
		<Animated.View style={styles.mainimagewrap}>
			<View style={[styles.imagewrap, styles.elevation]}>
				<Image
					source={item.artwork}
					style={styles.musicimage}
				/>
			</View>
		</Animated.View>
  );
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.maincontainer}>
				{/* image */}
				<Animated.FlatList
					data={data}
					renderItem={renderItem}
					keyExtractor={item => item.id}
					horizontal
					pagingEnabled
					showsHorizontalScrollIndicator={false}
					scrollEventThrottle={16}
					onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {x: scrollX},
                },
              },
            ],
            {useNativeDriver: true},
          )}
      	/>
				{/* son title */}
				<View>
					<Text style={[styles.songContent, styles.songTitle]}>{data[songIndex].title}</Text>
					<Text style={[styles.songContent, styles.songArtist]}>{data[songIndex].artist}</Text>
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
					<TouchableOpacity onPress={() => togglePlayBack(playBackState)}>
						<Icone
							name={playBackState === State.Playing
							? "ios-pause-circle"
							: "ios-play-circle"}
							size={75}
							color="#FFD369"
						/>
					{/* <TouchableOpacity onPress={() => TrackPlayer.play()}>
						<Icone
							name= "ios-play-circle"
							size={75}
							color="#FFD369"
						/> */}
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