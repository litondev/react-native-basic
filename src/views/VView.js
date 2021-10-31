import React from "react";
import {Text,View} from "react-native";

const VView = () => {
	return (
		<View style={{padding : 10,flexDirection : 'row'}}>
			<View style={{backgroundColor : 'red',flex : 3}}></View>
			<View style={{backgroundColor : 'blue',flex : 3}}></View>
			<View style={{backgroundColor : 'orange',flex : 3}}><Text>Hai</Text></View>
		</View> 
	);
}

export default VView;