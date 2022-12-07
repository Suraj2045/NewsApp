import * as React from "react";
import { ScrollView, StyleSheet, View, Image } from "react-native";

const IPhone1313Pro2 = () => {
  return (
    <View style={styles.iPhone1313Pro2}>
      <ScrollView
        style={styles.frameScrollView}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.frameScrollViewContent}
      >
        <View style={styles.groupView}>
          <View style={styles.rectangleView} />
          <View style={styles.rectangleView1} />
          <View style={styles.rectangleView2} />
          <View style={styles.rectangleView3} />
          <View style={styles.rectangleView4} />
          <View style={styles.rectangleView5} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "row",
  },
  rectangleView: {
    position: "absolute",
    top: 3220.19,
    left: 0,
    borderRadius: 37,
    backgroundColor: "#f9118e",
    width: 320,
    height: 618.28,
  },
  rectangleIcon: {
    position: "absolute",
    top: 3874.72,
    left: 0,
    borderRadius: 37,
    width: 320,
    height: 618.28,
  },
  rectangleView1: {
    position: "absolute",
    top: 2576.15,
    left: 0,
    borderRadius: 37,
    backgroundColor: "#b628e8",
    width: 320,
    height: 618.28,
  },
  rectangleView2: {
    position: "absolute",
    top: 1925.44,
    left: 0,
    borderRadius: 37,
    backgroundColor: "#28e8dc",
    width: 320,
    height: 618.28,
  },
  rectangleView3: {
    position: "absolute",
    top: 1285.21,
    left: 0,
    borderRadius: 37,
    backgroundColor: "#37e828",
    width: 320,
    height: 618.28,
  },
  rectangleView4: {
    position: "absolute",
    top: 643.08,
    left: 0,
    borderRadius: 37,
    backgroundColor: "#e4e828",
    width: 320,
    height: 618.28,
  },
  rectangleView5: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 37,
    backgroundColor: "#d62222",
    width: 320,
    height: 618.28,
  },
  groupView: {
    position: "relative",
    width: 320,
    height: 4493,
    flexShrink: 0,
  },
  frameScrollView: {
    top: 10,
    left: 35,
    width: 320,
    flex: 1,
  },
  iPhone1313Pro2: {
    position: "relative",
    backgroundColor: "#e3dfdf",
    flex: 1,
    width: "100%",
    height: 844,
  },
});

export default IPhone1313Pro2;
