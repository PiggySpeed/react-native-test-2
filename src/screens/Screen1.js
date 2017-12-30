import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class Screen1 extends React.Component {
  static navigationOptions = {
    title: 'Screen 1',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Screen 1</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#ff7d6e',
  },
});
