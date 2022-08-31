import TrackPlayer from "react-native-track-player";

module.exports = async function() {
    // This service needs to be registered for the module to work
    // but it will be used later in the "Receiving Events" section
	try {
    TrackPlayer.addEventListener('remote-play', () => {
      TrackPlayer.play()
    })

    TrackPlayer.addEventListener('remote-pause', () => {
      TrackPlayer.pause()
    });

    TrackPlayer.addEventListener('remote-next', () => {
      TrackPlayer.skipToNext()
    });

    TrackPlayer.addEventListener('remote-previous', () => {
      TrackPlayer.skipToPrevious()
    });

    TrackPlayer.addEventListener('remote-stop', () => {
      TrackPlayer.destroy()
    });
	} catch (error) {
		console.log(error);
	}
}