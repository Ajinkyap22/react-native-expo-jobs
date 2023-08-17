import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../constants";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = {
  tabName: string;
  isActive: boolean;
  index: number;
  handleTabPress: (index: number) => void;
};

const Tab = ({ tabName, isActive, index, handleTabPress }: Props) => {
  return (
    <TouchableOpacity
      style={[styles.tab, isActive ? styles.activeTab : styles.inactiveTab]}
      onPress={() => handleTabPress(index)}
    >
      <Text style={isActive ? styles.activeText : styles.inactiveText}>
        {tabName}
      </Text>
    </TouchableOpacity>
  );
};

export default Tab;

const styles = StyleSheet.create({
  tab: {
    padding: SIZES.small,
    borderRadius: SIZES.medium,
  },
  activeTab: {
    backgroundColor: COLORS.primary,
  },
  inactiveTab: {
    backgroundColor: "#F3F4F8",
  },
  activeText: {
    color: COLORS.lightWhite,
  },
  inactiveText: {
    color: COLORS.gray,
  },
});
