import React from "react";
import {Text,View,Alert,Button} from "react-native";

const VAlert = () => {

	const showAlert = () => {
		Alert.alert(
			"Alert Title",
			"My Alert Msg",
			[
				{ text : "Cancel",onPress : () => Alert.alert("Cancel") },
				{ text: "OK", onPress: () => console.log("OK Pressed") }
			]
		)
	}

	return (
		<>
			<View>
				<Button 
					title="Click Me"
					onPress={() => showAlert()} />
			</View>
		</> 
	);
}

export default VAlert