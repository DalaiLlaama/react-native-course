import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ListItem from './src/components/ListItem';

export default class App extends React.Component {
  state = {
	  placeName: '',
	  places: []
  }
  
  placeNameChangedHandler = (val) => {
	  this.setState({placeName: val})
  }
  
  placeSubmitHandler = () => {
	  if (this.state.placeName.trim() === '') {
		  return;
	  }
	  
	  this.setState(prevState => {
		  return {
			  places: prevState.places.concat(prevState.placeName),
			  placeName: ''
		  }
	  })
  }
	
  render() {
	const placesOutput = this.state.places.map((place,i) => { return (
		<ListItem key={i} placeName={place} />
	)
	});
	
    return (
      <View style={styles.container}>
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
	   <View style={styles.listContainer}>{placesOutput}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
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
  },
  listContainer: {
    width: "100%",
	alignItems: 'center'
  }
});
