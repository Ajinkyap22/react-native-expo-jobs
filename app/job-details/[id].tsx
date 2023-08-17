import React, { useCallback, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
} from "react-native";

import { Stack, useGlobalSearchParams, useRouter } from "expo-router";

import useFetch from "../../hooks/useFetch";

import { COLORS, SIZES, icons } from "../../constants";

import ScreenHeaderButton from "../../components/ScreenHeaderButton";
import Company from "../../components/Company";
import Tab from "../../components/Tab";
import Specifics from "../../components/Specifics";
import JobDescription from "../../components/JobDescription";
import Footer from "../../components/Footer";

const tabs = ["Description", "Qualifications", "Responsibilities"];

const JobDetails = () => {
  const params = useGlobalSearchParams();
  const router = useRouter();

  const [activeTab, setActiveTab] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  const { data, loading, error, refetch } = useFetch("job-details", {
    job_id: params.id,
  });

  const handleTabPress = (index: number) => {
    setActiveTab(index);
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, []);

  const TabContent = () => {
    switch (activeTab) {
      case 0:
        return <JobDescription description={data?.[0]?.job_description} />;
      case 1:
        return (
          <Specifics
            title="Qualifications"
            points={data?.[0]?.qualifications || ["Not Provided"]}
          />
        );
      case 2:
        return (
          <Specifics
            title="Responsibilities"
            points={data?.[0]?.responsibilities || ["Not Provided"]}
          />
        );
      default:
        return (
          <JobDescription description={data?.[0]?.job_description || "N/A"} />
        );
    }
  };

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
          headerRight: () => (
            <ScreenHeaderButton
              iconUrl={icons.share}
              type="Icon"
              handlePress={() => router.back()}
            />
          ),
        }}
      />

      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {loading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : (
            <View>
              {/* company */}
              <Company
                logo={
                  data?.[0]?.employer_logo ||
                  "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
                }
                jobTitle={data?.[0]?.job_title}
                companyName={data?.[0]?.employer_name}
                location={data?.[0]?.job_country}
              />

              {/* tabs */}
              <View style={styles.tabsContainer}>
                <FlatList
                  data={tabs}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item, index }) => (
                    <Tab
                      tabName={item}
                      index={index}
                      isActive={item === tabs[activeTab]}
                      handleTabPress={handleTabPress}
                    />
                  )}
                  keyExtractor={(item) => item}
                  contentContainerStyle={styles.tabs}
                />
              </View>

              {/* tab content */}
              <View style={styles.tabContent}>
                <TabContent />
              </View>
            </View>
          )}
        </ScrollView>

        <Footer jobUrl={data?.[0].job_google_link} />
      </>
    </SafeAreaView>
  );
};

export default JobDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  tabsContainer: {
    marginTop: SIZES.large,
  },
  tabs: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    gap: SIZES.xSmall,
  },
  tabContent: {
    marginVertical: SIZES.large,
    paddingHorizontal: SIZES.small,
  },
});

// const data = [
//   {
//     employer_name: "Google",
//     employer_logo:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png",
//     job_title: "Python Developer",
//     job_country: "US",
//     qualifications: [
//       "Python, React, Linux, Unix, API",
//       "Strong development experience using Python, REST API Service",
//       "Database development skills, experience with Object-oriented and Relational databases - SQL Server/Oracle/Sybase",
//       "Experience developing software using Agile methodology",
//       "Knowledge of JIRA tools and Continuous Integration capabilities",
//       "Hands on experience in writing unit and UI integration test cases",
//     ],
//     responsibilities: [
//       "Directing or performing Website/Electronic Communications updates",
//       "Developing or validating test routines and schedules in ensuring that test cases mimic external interfaces and address all browser and device types",
//       "Editing, writing, or designing Website content, and directing team members who produce content",
//       "Maintaining an understanding of the latest Web applications and programming practices through education, studying, and participating in conferences, workshops, and groups",
//       "Identifying problems uncovered by customer feedback and testing and correcting or referring problems to appropriate personnel for correction",
//       "Evaluating code in ensuring that it meets industry standards, is valid, is properly structured, and is compatible with browsers, devices, or operating systems; and Determining user needs by analyzing technical requirements",
//     ],
//     job_description:
//       "Your Opportunity We help our clients plan for their future and they are passionate about the tools and experiences we provide. We collaborate with user experience and design, business and technology partners across the enterprise to build software experiences our users’ are passionate about. What you are good at Website and Electronic Communications (Email, Push, SMS, etc) Templates designing, building, or maintaining. Using scripting or authoring languages, management tools, content creation tools, applications and digital media. Conferring with teams in resolving conflicts, prioritizing needs, developing content criteria, or choosing solutions. Directing or performing Website/Electronic Communications updates. Developing or validating test routines and schedules in ensuring that test cases mimic external interfaces and address all browser and device types. Editing, writing, or designing Website content, and directing team members who produce content. Maintaining an understanding of the latest Web applications and programming practices through education, studying, and participating in conferences, workshops, and groups. Identifying problems uncovered by customer feedback and testing and correcting or referring problems to appropriate personnel for correction. Evaluating code in ensuring that it meets industry standards, is valid, is properly structured, and is compatible with browsers, devices, or operating systems; and Determining user needs by analyzing technical requirements. What you have Job Requirements: Bachelor’s degree or foreign degree equivalent in Computer Science, Engineering or related field and five (5) years of experience in the job offered or related role. Skills: Experience and/or education must include: Experience in programming applications using HTML, JavaScript, CSS, Angular/React Js, XML and Json.; SQL/No-SQL databases; Experience working with the continuous integration and continuous deployment (CI/CD) pipelines; Experience in programming applications using Java/J2EE; Understanding of software quality assurance principles; Experience working in Agile teams. Charles Schwab & Company, Inc. seeks Software Web Developer in Austin, TX.",
//     job_google_link:
//       "https://www.google.com/search?gl=us&hl=en&q=NL4ItxKcvvIAAAAAAAAAAA%3D%3D&cs=1&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=NL4ItxKcvvIAAAAAAAAAAA%3D%3D&htidocid=NL4ItxKcvvIAAAAAAAAAAA%3D%3D",
//   },
// ];
