import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from "react-native";

import { COLORS } from "../constants";

type Props = {
  iconUrl: ImageSourcePropType;
  type: "Icon" | "Avatar";
  handlePress: () => void;
};

const ScreenHeaderButton = ({ iconUrl, type, handlePress }: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={type === "Icon" ? styles.icon : styles.image}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderButton;

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: "60%",
    height: "60%",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
});
