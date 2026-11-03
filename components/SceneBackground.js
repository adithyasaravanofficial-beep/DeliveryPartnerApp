import React from 'react';
import {View, Image, useWindowDimensions, StyleSheet} from 'react-native';
import {STATUS_BAR_HEIGHT} from '../constants';

// The background of Splash 3, 4 and 8: orange sky + city + delivery rider on the road.
//
// In the Figma design the picture does NOT fill the whole screen:
//   - it is a little wider than the screen (112%) and centered,
//   - it starts about 46% of the screen width down from the top,
//   - the plain orange sky color fills the space above it,
//   - the grey road color fills the space below it.
// Everything is calculated from the screen width, so it fits any phone.
export default function SceneBackground({children}) {
  // useWindowDimensions gives us the real screen width of the phone.
  const {width} = useWindowDimensions();

  const imageWidth = width * 1.117;
  const imageHeight = imageWidth * 1.5;      // the picture is 1024 x 1536 (1.5 times taller)
  const imageLeft = (width - imageWidth) / 2; // negative number: sticks out equally on both sides
  const imageTop = width * 0.457;

  return (
    <View style={styles.sky}>
      {/* grey road color below the picture (hidden behind the white bottom card) */}
      <View style={[styles.road, {top: imageTop + imageHeight - 2}]} />

      {/* the picture */}
      <Image
        source={require('../assets/scene.jpg')}
        style={{
          position: 'absolute',
          top: imageTop,
          left: imageLeft,
          width: imageWidth,
          height: imageHeight,
        }}
      />

      {/* the screen's own content (heading, buttons...) sits on top */}
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  sky: {
    flex: 1,
    backgroundColor: '#FD805B', // sky color from Figma
    overflow: 'hidden',
  },
  road: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#A79696', // road color
  },
  content: {
    flex: 1,
    paddingTop: STATUS_BAR_HEIGHT,
  },
});
