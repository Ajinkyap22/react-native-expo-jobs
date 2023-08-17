import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONT, SHADOWS, SIZES } from "../constants";

type Props = {
  title: string;
  points: string[];
};

const Specifics = ({ title, points }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>

      <View style={styles.list}>
        {points.map((point, index) => (
          <Text key={index} style={styles.point}>
            {"\u2022 "} {point}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default Specifics;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: SIZES.medium,
    borderRadius: SIZES.medium,
    ...SHADOWS.medium,
    shadowColor: COLORS.gray,
  },
  title: {
    fontSize: SIZES.large,
    color: COLORS.primary,
    fontFamily: FONT.medium,
  },
  list: {
    marginTop: SIZES.small,
    gap: SIZES.medium,
  },
  point: {
    fontFamily: FONT.regular,
    color: COLORS.gray,
  },
});
