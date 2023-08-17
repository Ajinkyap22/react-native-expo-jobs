import React, { useCallback, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import { Stack, useGlobalSearchParams, useRouter } from "expo-router";

import { COLORS, FONT, SIZES, icons } from "../../constants";

import ScreenHeaderButton from "../../components/ScreenHeaderButton";
import NearByJobCard from "../../components/NearbyJobCard";

import useFetch from "../../hooks/useFetch";

const SearchJob = () => {
  const router = useRouter();
  const params = useGlobalSearchParams();

  const { data, loading, error } = useFetch("search", {
    query: params.id as string,
    num_pages: 1,
  });

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitle: "",
          headerLeft: () => (
            <ScreenHeaderButton
              iconUrl={icons.left}
              type="Icon"
              handlePress={() => router.back()}
            />
          ),
        }}
      />

      {loading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        <View>
          <View style={styles.title}>
            <View>
              <Text style={styles.searchTerm}>{params.id}</Text>

              <Text style={styles.count}>{data?.length} Job Opportunities</Text>
            </View>

            <TouchableOpacity style={styles.filterButton}>
              <Image source={icons.filter} style={styles.filterIcon} />
            </TouchableOpacity>
          </View>

          <FlatList
            contentContainerStyle={styles.jobs}
            showsVerticalScrollIndicator={false}
            data={data}
            keyExtractor={(item) => item.job_id}
            renderItem={({ item }) => (
              <NearByJobCard
                employerName={item.employer_name}
                employerLogo={
                  item.employer_logo ||
                  "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
                }
                jobTitle={item.job_title}
                handleNavigate={() =>
                  router.push(`/job-details/${item.job_id}`)
                }
              />
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default SearchJob;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  title: {
    marginTop: SIZES.medium,
    paddingHorizontal: SIZES.large,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: SIZES.xSmall,
  },
  searchTerm: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    color: COLORS.primary,
  },
  count: {
    fontSize: SIZES.small,
    color: COLORS.primary,
    marginTop: 4,
  },
  filterButton: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.tertiary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.small,
  },
  filterIcon: {
    width: "60%",
    height: "60%",
    tintColor: "#fff",
  },
  jobs: {
    marginTop: SIZES.large,
    gap: SIZES.small,
    paddingHorizontal: SIZES.medium,
    paddingBottom: 120,
  },
});

// const data = [
//   {
//     employer_name: "Google",
//     employer_logo:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png",
//     job_title: "React Developer React Developer React Developer",
//     job_id: "1",
//   },
//   {
//     employer_name: "Google",
//     employer_logo:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png",
//     job_title: "React Developer",
//     job_id: "2",
//   },
//   {
//     employer_name: "Google",
//     employer_logo:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png",
//     job_title: "React Developer",
//     job_id: "3",
//   },
//   {
//     employer_name: "Google",
//     employer_logo:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png",
//     job_title: "React Developer React Developer React Developer",
//     job_id: "1",
//   },
//   {
//     employer_name: "Google",
//     employer_logo:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png",
//     job_title: "React Developer",
//     job_id: "2",
//   },
//   {
//     employer_name: "Google",
//     employer_logo:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png",
//     job_title: "React Developer",
//     job_id: "3",
//   },
//   {
//     employer_name: "Google",
//     employer_logo:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png",
//     job_title: "React Developer React Developer React Developer",
//     job_id: "1",
//   },
//   {
//     employer_name: "Google",
//     employer_logo:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png",
//     job_title: "React Developer",
//     job_id: "2",
//   },
//   {
//     employer_name: "Google",
//     employer_logo:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png",
//     job_title: "React Developer",
//     job_id: "3",
//   },
// ];
