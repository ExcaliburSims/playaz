import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MusicPlayer from './src/screens/MusicPlayer'
import Player from './src/screens/Player'

const App = () => {
  return (
    <View style={styles.container}>
      {/* <MusicPlayer /> */}
      <Player />
    </View>
  )
}

export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})