import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CategoryListItem from './components/CategoryListItem';

export default function App() {
  return (
    <View style={styles.container}>
      <CategoryListItem />
      <CategoryListItem />
      <CategoryListItem />
      <CategoryListItem />
      <CategoryListItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // kéo dãn sang 2 bên
    alignItems: "stretch",
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
});
