import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const categories = ['Motivation', 'Locked In', 'Music', 'Credits'];

  const activities = [
    { id: 1, title: 'Rain Sounds', category: 'Music' },
    { id: 2, title: 'Deep Sleep Story', category: 'Sleep Stories' },
    { id: 3, title: 'Guided Meditation', category: 'Meditation' },
    { id: 4, title: 'Ocean Waves', category: 'Music' },
    { id: 5, title: 'Evening Relaxation', category: 'Relaxation' },
  ];

  const handleCategoryPress = (category) => {
    navigation.navigate('Category', { category });
  };

  const handleActivityPress = (activity) => {
    navigation.navigate('Activity', { activity });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Kalm</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.headerIcon}>👤</Text>
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={styles.category}
            onPress={() => handleCategoryPress(category)}
          >
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Activities */}
      <ScrollView style={styles.activityList}>
        {activities.map((activity) => (
          <TouchableOpacity
            key={activity.id}
            style={styles.activityCard}
            onPress={() => handleActivityPress(activity)}
          >
            <Text style={styles.activityTitle}>{activity.title}</Text>
            <Text style={styles.activityCategory}>{activity.category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#121212',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerIcon: {
    fontSize: 24,
    color: '#fff',
  },
  categories: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#1E1E1E',
  },
  category: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
    backgroundColor: '#333',
    borderRadius: 20,
  },
  categoryText: {
    fontSize: 16,
    color: '#fff',
  },
  activityList: {
    padding: 20,
  },
  activityCard: {
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
  },
  activityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  activityCategory: {
    fontSize: 14,
    color: '#aaa',
    marginTop: 5,
  },
});

export default HomeScreen;