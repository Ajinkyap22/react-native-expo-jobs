import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { COLORS, FONT, SIZES } from "../constants";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = {
  employerName: string;
  employerLogo: string;
  jobTitle: string;
  jobCountry: string;
  handleNavigate: () => void;
};

const PopularJobCard = ({
  employerName,
  employerLogo,
  jobTitle,
  jobCountry,
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

      {/* employer */}
      <Text numberOfLines={1} style={styles.employer}>
        {employerName}
      </Text>

      <View>
        {/* title */}
        <Text numberOfLines={1} style={styles.title}>
          {jobTitle}
        </Text>

        {/* country */}
        <Text numberOfLines={1} style={styles.employer}>
          {jobCountry}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;

const styles = StyleSheet.create({
  container: {
    gap: 10,
    width: 150,
  },
  logoContainer: {
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.xSmall,
    width: 50,
    height: 50,
  },
  logo: {
    width: "60%",
    height: "60%",
  },
  employer: {
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
  title: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.secondary,
  },
});
