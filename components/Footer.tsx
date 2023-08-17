import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";

import { COLORS, FONT, SIZES, icons } from "../constants";

type Props = {
  jobUrl: string;
};

const Footer = ({ jobUrl }: Props) => {
  return (
    <View style={styles.footer}>
      {/* like */}
      <TouchableOpacity style={styles.likeButton}>
        <Image source={icons.heartOutline} style={styles.likeIcon} />
      </TouchableOpacity>

      {/* apply */}
      <TouchableOpacity
        style={styles.applyButton}
        onPress={() => Linking.openURL(jobUrl)}
      >
        <Text style={styles.applyText}>Apply for Job</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#fff",
    padding: SIZES.medium,
    position: "sticky",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: SIZES.medium,
  },
  likeButton: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.tertiary,
    borderRadius: SIZES.small,
  },
  likeIcon: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.tertiary,
  },
  applyButton: {
    backgroundColor: COLORS.tertiary,
    flex: 1,
    height: 50,
    borderRadius: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
  },
  applyText: {
    color: COLORS.lightWhite,
    fontSize: SIZES.medium,
    fontFamily: FONT.bold,
  },
});
