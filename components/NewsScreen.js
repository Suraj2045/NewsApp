import React, { useContext, useState } from "react";
import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import { NewsContext } from "../API/Context";
import SingleNews from "./SingleNews";

const NewsScreen = (props) => {
  const articles=props.data;

  const darkTheme=false;
  
  const [activeIndex, setActiveIndex] = useState();

  const windowHeight = Dimensions.get("window").height;

  // console.log(articles && articles[9]);

  return (
    <View style={styles.carousel}>
      {articles && (
        <Carousel
          firstItem={articles.length - 1}
          layout={"default"}
          data={articles}
          sliderHeight={200}
          itemHeight={windowHeight}
          vertical={true}
          useScrollView={false}
          inactiveSlideOpacity={1}
          inactiveSlideScale={1}
          enableSnap={true}
          disableIntervalMomentum={true}
          shouldOptimizeUpdates
          removeClippedSubviews={true}
          renderItem={({ item, index }) => (
            <SingleNews item={item} index={index} darkTheme={darkTheme} />
          )}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      )}
    </View>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    transform: [{ scaleY: -1 }],
    backgroundColor: "#002333",
  },
});