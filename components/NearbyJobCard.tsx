import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { COLORS, FONT, SHADOWS, SIZES } from "../constants";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = {
  employerName: string;
  employerLogo: string;
  jobTitle: string;
  handleNavigate?: () => void;
};

const NearByJobCard = ({
  employerName,
  employerLogo,
  jobTitle,
  handleNavigate,
}: Props) => {
  return (
    <TouchableOpacity onPress={handleNavigate} style={styles.container}>
      {/* logo */}
      <TouchableOpacity onPress={handleNavigate} style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={{ uri: employerLogo }}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        {/* title */}
        <Text numberOfLines={1} style={styles.title}>
          {jobTitle}
        </Text>

        {/* employer */}
        <Text numberOfLines={1} style={styles.employer}>
          {employerName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearByJobCard;

const styles = StyleSheet.create({
  container: {
    gap: SIZES.medium,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: SIZES.small,
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
    backgroundColor: "#fff",
    borderRadius: SIZES.xSmall,
  },
  logoContainer: {
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.xSmall,
    width: 35,
    height: 35,
  },
  logo: {
    width: "60%",
    height: "60%",
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.secondary,
    marginBottom: 2,
  },
  employer: {
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
});
