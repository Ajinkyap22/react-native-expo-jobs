import React, { useState } from "react";
import { SafeAreaView, StyleSheet, ScrollView } from "react-native";

import { COLORS, SIZES, icons, images } from "../constants";
import { Stack, useRouter } from "expo-router";
import ScreenHeaderButton from "../components/ScreenHeaderButton";
import Welcome from "../components/Welcome";
import PopularJobs from "../components/PopularJobs";
import NearbyJobs from "../components/NearbyJobs";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearchTermChange = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  const handleSearch = () => {
    searchTerm && router.push(`/search/${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderButton
              iconUrl={icons.menu}
              type="Icon"
              handlePress={() => null}
            />
          ),
          headerRight: () => (
            <ScreenHeaderButton
              iconUrl={images.profile}
              type="Avatar"
              handlePress={() => null}
            />
          ),
          title: "",
        }}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        {/* welcome */}
        <Welcome
          searchTerm={searchTerm}
          setSearchTerm={handleSearchTermChange}
          handleSearch={handleSearch}
        />

        {/* popular jobs */}
        <PopularJobs />

        {/* nearby jobs */}
        <NearbyJobs />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  scrollView: {
    flex: 1,
    padding: SIZES.medium,
  },
});
