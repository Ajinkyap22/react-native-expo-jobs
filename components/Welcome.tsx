import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { COLORS, FONT, SIZES, icons } from "../constants";
import { useRouter } from "expo-router";

const tabs = ["Full Time", "Part Time", "Contractor"];

type Props = {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  handleSearch: () => void;
};

const Welcome = ({ searchTerm, setSearchTerm, handleSearch }: Props) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const router = useRouter();

  const changeTab = (tab: string) => {
    setActiveTab(tab);
    // @ts-ignore
    router.push(`/search/${tab}`);
  };

  return (
    <View>
      {/* title */}
      <View style={styles.titleWrapper}>
        <Text style={styles.subtitle}>Hello Victor</Text>
        <Text style={styles.title}>Find your perfect job</Text>
      </View>

      {/* search */}
      <View style={styles.searchContainer}>
        {/* input */}
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="What are you looking for?"
            onChangeText={setSearchTerm}
            value={searchTerm}
          />
        </View>

        {/* button */}
        <TouchableOpacity onPress={handleSearch} style={styles.searchBtn}>
          <Image style={styles.searchBtnImage} source={icons.search} />
        </TouchableOpacity>
      </View>

      {/* tabs */}
      <View style={styles.tabsContainer}>
        <FlatList
          contentContainerStyle={styles.tabs}
          horizontal
          data={tabs}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.tab, activeTab === item && styles.activeTab]}
              onPress={() => changeTab(item)}
            >
              <Text style={[activeTab === item && styles.activeTabText]}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  titleWrapper: {
    marginBottom: 20,
  },
  title: {
    fontSize: SIZES.xLarge,
    fontFamily: FONT.bold,
    color: COLORS.primary,
    marginTop: 2,
  },
  subtitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.regular,
    color: COLORS.secondary,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
  },
  searchInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
  tabsContainer: {
    marginTop: SIZES.large,
  },
  tabs: {
    justifyContent: "flex-start",
    gap: SIZES.small,
    flex: 1,
  },
  tab: {
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.medium,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.white,
  },
  activeTab: {
    backgroundColor: COLORS.tertiary,
  },
  activeTabText: {
    color: COLORS.white,
    fontWeight: "bold",
  },
});
