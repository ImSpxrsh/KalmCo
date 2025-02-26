import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CategoryScreen = ({ route }) => {
  const { category } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category}</Text>
      <Text style={styles.description}>This is the {category} page.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    fontSize: 16,
    color: '#aaa',
    marginTop: 10,
  },
});

export default CategoryScreen;