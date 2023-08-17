import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useRouter } from "expo-router";

import NearByJobCard from "./NearbyJobCard";
import { COLORS, FONT, SIZES } from "../constants";

import useFetch from "../hooks/useFetch";
import { Job } from "../types/searchJobsResponse";

const NearbyJobs = () => {
  const { data, loading, error } = useFetch("search", {
    query: "React Developer in India",
    num_pages: 1,
  });

  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Nearby Jobs</Text>

        <TouchableOpacity>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.jobs}>
        {loading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong.</Text>
        ) : (
          data?.map((item: Job) => (
            <NearByJobCard
              key={`nearby-job-${item.job_id}`}
              employerName={item.employer_name}
              employerLogo={
                item.employer_logo ||
                "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
              }
              jobTitle={item.job_title}
              handleNavigate={() => router.push(`/job-details/${item.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default NearbyJobs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: SIZES.xLarge,
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
    marginTop: SIZES.xLarge,
  },
  viewAllText: {
    color: COLORS.gray,
    fontFamily: FONT.medium,
    marginRight: SIZES.xSmall,
  },
  jobs: {
    marginTop: SIZES.large,
    gap: SIZES.small,
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
// ];
