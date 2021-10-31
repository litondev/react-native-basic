import React from "react";
import {Text,View,ActivityIndicator} from "react-native";

const VLoading = () => {
	return (
		<>
			<View>
				<ActivityIndicator size="large" />
    			<ActivityIndicator size="small" color="#0000ff" />
    			<ActivityIndicator size="large" color="#00ff00" />
			</View>
		</> 
	);
}

export default VLoading