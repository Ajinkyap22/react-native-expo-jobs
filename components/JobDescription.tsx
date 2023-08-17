import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONT, SHADOWS, SIZES } from "../constants";

type Props = {
  description: string;
};

const JobDescription = ({ description }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About the Job :</Text>

      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default JobDescription;

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
  description: {
    marginTop: SIZES.small,
    fontFamily: FONT.regular,
    color: COLORS.gray,
  },
});
