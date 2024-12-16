// import NavigationBar from '@/components/pages/NavigationBar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import NavigationBar from '../NavigationBar';
import NavigationBar from '../pages/NavigationBar';
// import BottomNav from '@/pages/BottomNaV';
const HomeScreen: React.FC = () => {
  const handleEvent = () => {
    try {
      console.log("Event triggered");
      // Add any additional event handling logic here
    } catch (error) {
      console.error("Error handling event:", error);
      // Handle the error appropriately
      // Could add error reporting, user notification, etc.
    }
  }
  return (
    <>
      <ScrollView style={styles.container}>
        {/* <NavigationBar /> */}

        {/* Quick Access Section */}
        <View style={styles.quickAccessContainer}>
          <TouchableOpacity style={styles.quickAccessItem}>
            <Text style={styles.quickAccessText}>Upload report</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickAccessItem}>
            <Text style={styles.quickAccessText}>Syllabus materials</Text>
          </TouchableOpacity>
        </View>

        {/* E-learning Section */}
        <View style={styles.eLearningSection}>
          <Text style={styles.eLearningTitle}>
            Next E-learning Exam on 10th March 2024
          </Text>
          <Text style={styles.eLearningTopic}>Topic - Daan 2</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleEvent}>
              <Text style={styles.buttonText}>Join Exam</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.viewPdfButton]}>
              <Text style={styles.buttonText}>View PDF</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Center Updates Section */}
        <View style={styles.centerUpdatesContainer}>
          <Text style={styles.centerUpdateText}>
            This friday there will be magic show for all the kids. So no sessions this friday.
          </Text>
          <Text style={styles.centerUpdateHead}>— Center head</Text>
        </View>


      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quickAccessContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  quickAccessItem: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: '45%',
    alignItems: 'center',
  },
  quickAccessText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  eLearningSection: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    marginTop: 15,
    borderRadius: 10,
  },
  eLearningTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  eLearningTopic: {
    fontSize: 14,
    color: '#555',
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#6200ea',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
    width: '45%',
    alignItems: 'center',
  },
  viewPdfButton: {
    backgroundColor: '#03dac5',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  centerUpdatesContainer: {
    padding: 20,
    marginTop: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
  },
  centerUpdateText: {
    fontSize: 14,
    color: '#333',
  },
  centerUpdateHead: {
    fontSize: 12,
    color: '#666',
    marginTop: 10,
    textAlign: 'right',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#f5f5f5',
  },
  footerItem: {
    paddingVertical: 10,
  },
  footerText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
