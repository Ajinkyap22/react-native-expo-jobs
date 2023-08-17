import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONT, SHADOWS, SIZES, icons } from "../constants";

type Props = {
  logo: string;
  jobTitle: string;
  companyName: string;
  location: string;
};

const Company = ({ logo, jobTitle, companyName, location }: Props) => {
  return (
    <View style={styles.container}>
      {/* logo */}
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: logo }}
          resizeMode="contain"
          style={styles.logo}
        />
      </View>

      {/* job title */}
      <Text style={styles.title}>{jobTitle}</Text>

      {/* company name & location */}
      <View style={styles.jobInfo}>
        <Text style={styles.employer}>{companyName} /</Text>

        <View style={styles.locationInfo}>
          <Image
            source={icons.location}
            resizeMode="contain"
            style={styles.locationIcon}
          />

          <Text style={styles.locationText}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

export default Company;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: SIZES.small,
    gap: 8,
  },
  logoContainer: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.large,
    ...SHADOWS.small,
    shadowColor: COLORS.gray,
    width: 80,
    height: 80,
  },
  logo: {
    width: "60%",
    height: "60%",
  },
  title: {
    fontSize: SIZES.large,
    fontFamily: FONT.bold,
    color: COLORS.secondary,
  },
  jobInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  employer: {
    fontSize: SIZES.small,
    color: COLORS.primary,
  },
  locationInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  locationIcon: {
    width: 15,
    height: 15,
    tintColor: COLORS.gray,
  },
  locationText: {
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
});
