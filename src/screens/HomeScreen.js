import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

          <Text>Hello Worlds</Text>
          <Button title='Go To Screen 1' onPress={() => navigate('Screen1')} />
          <Button title='Go To Screen 2' onPress={() => navigate('Screen2')} />

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
