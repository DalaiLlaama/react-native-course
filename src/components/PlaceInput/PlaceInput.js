import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default class PlaceInput extends Component {
  state = {
    placeName: ''
  }

  placeNameChangedHandler = (val) => {
      this.setState({placeName: val})
  }

  placeSubmitHandler = () => {
  	  if (this.state.placeName.trim() === '') {
  		  return;
  	  }

  	  this.props.onPress(this.state.placeName)
  	  this.setState({placeName: ''});
  }


  render() {
        return (
           <View style={styles.inputContainer}>
            <TextInput
                style={styles.placeInput}
                placeholder="An awesome place"
                onChangeText={this.placeNameChangedHandler}
                value={this.state.placeName}
            />
            <Button
                style={styles.placeButton}
                title="Add"
                onPress={this.placeSubmitHandler}
            />
           </View>
        );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
	  width: '100%',
	  flexDirection: 'row',
	  justifyContent: 'space-between',
	  alignItems: 'center',
  },
  placeInput: {
	  width: "70%"
  },
  placeButton: {
	  width: "30%"
  }
})
