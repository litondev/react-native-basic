import  React from "react";
import {Image,Text,View} from "react-native";

const VImage = () => {
	return (
		<>
			<View>
				<Text>
					Image 1
				</Text>

				<Image source={{
					uri  : "https://reactnative.dev/img/tiny_logo.png"
				}}	
				style={{width : 100,height : 100}}/>				
			</View>

			<View>
				<Text>
					Image 2
				</Text>

				<Image source={
					require("../../assets/avatar.png")
				}
				style={{width : 100,height : 100}}/>
			</View>

			<View>
				<Text>
					Image 3 
				</Text>

				<Image source={
					require("../../assets/avatar.png")
				}
				style={{width : 100,height : 50,resizeMode: 'stretch',}} />				
			</View>
		</>	
	);
}

export default VImage;