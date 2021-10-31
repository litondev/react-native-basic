import React from "react";
import {Text,View,Dimensions} from "react-native";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const VDimension = () => {
	
	React.useEffect(() => {
		console.log(window);
		console.log(screen);
	},[]);

	return (
		<>
			<View>
				<Text>
					Is Dimension
				</Text>
			</View>
		</> 
	);
}

export default VDimension