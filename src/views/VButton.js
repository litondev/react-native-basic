import React from "react";
import {Text,View,Button} from "react-native";

const VButton = () => {
	return (
		<>
			<View>
				<Text>
					<Button
						onPress={() => console.log("Hello")}
						title="Title"/>
				</Text>
			</View>
		</> 
	);
}

export default VButton