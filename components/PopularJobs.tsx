import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";

import useFetch from "../hooks/useFetch";

import { COLORS, FONT, SIZES } from "../constants";
import PopularJobCard from "./PopularJobCard";

import { useRouter } from "expo-router";

const PopularJobs = () => {
  const { data, loading, error } = useFetch("search", {
    query: "React Developer",
    num_pages: 1,
  });

  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Popular Jobs</Text>

        <TouchableOpacity>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.jobs}
          data={data}
          renderItem={({ item }) => (
            <PopularJobCard
              employerName={item.employer_name}
              employerLogo={
                item.employer_logo
                  ? item.employer_logo
                  : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
              }
              jobTitle={item.job_title}
              jobCountry={item.job_country}
              handleNavigate={() => router.push(`/job-details/${item.job_id}`)}
            />
          )}
          keyExtractor={(item) => item.job_id}
        />
      )}
    </View>
  );
};

export default PopularJobs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: SIZES.xLarge,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.secondary,
  },
  viewAllText: {
    color: COLORS.gray,
    fontFamily: FONT.medium,
    marginRight: SIZES.xSmall,
  },
  jobs: {
    marginTop: SIZES.large,
    gap: SIZES.medium,
  },
});

// const data = [
//   {
//     employer_name: "Google",
//     employer_logo:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png",
//     job_title: "React Developer",
//     job_country: "US",
//     job_id: "1",
//   },
//   {
//     employer_name: "Google",
//     employer_logo:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png",
//     job_title: "React Developer",
//     job_country: "US",
//     job_id: "2",
//   },
//   {
//     employer_name: "Google",
//     employer_logo: "",
//     job_title: "React Developer",
//     job_country: "US",
//     job_id: "3",
//   },
// ];
