import { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';

export default class ImageSlider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { post } = this.props;
    return (
      <View style={styles.container} onLayout={this.onLayout}>
        <SliderBox
          images={post.imageUrl}
          sliderBoxHeight={450}
          onCurrentImagePressed={(index) =>
            console.warn(`image ${index} pressed`)
          }
          autoplay={true}
          autoplayInterval={3500}
          circleLoop={true}
          dotColor='#FFEE58'
          inactiveDotColor='#90A4AE'
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
