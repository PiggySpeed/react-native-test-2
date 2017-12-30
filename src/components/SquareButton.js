import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class SquareButton extends React.Component {

  _onPress = () => {
    this.props.navigation.navigate(this.props.to);
  };

  render() {
    return (
        <TouchableOpacity
          style={[styles.container, this.props.styles]}
          onPress={this._onPress}>
          <Text style={styles.textStyle}>{this.props.title}</Text>
        </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexBasis: '30%',
    maxWidth: '30%',
    aspectRatio: 1,
    margin: '1%',
    flex: 1,

    borderWidth: 1,
    borderColor: '#CCC',
    backgroundColor: '#FFF'
  },
  textStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // display: 'flex',
    // flex: 1,
    // alignSelf: 'stretch',
    // display: 'flex',
    borderColor: 'red',
    borderWidth: 1,
    fontSize: 12,
    // flex: 0,
    // height: '100%',
    // width: '100%',
    textAlign: 'center'
  }
});
