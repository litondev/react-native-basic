import React from "react";
import {Text,View,Animated,Button} from "react-native";

const VAnimated = () => {
	const fadeAnim = React.useRef(new Animated.Value(0)).current;

	const fadeIn = () => {
		Animated.timing(fadeAnim,{
			toValue : 1,
			useNativeDriver: true,
			duration : 3000
		}).start();
	}

	const fadeOut = () => {
		Animated.timing(fadeAnim,{
			toValue : 0,
			useNativeDriver: true,
			duration : 3000
		}).start();
	}

	return (
		<>
			<View>
				<Animated.View
					style={{opacity : fadeAnim}}>
					<Text style={{color : 'black'}}>Animated</Text>
				</Animated.View>

				<Button 
					title="Fade In"
					onPress={fadeIn} />

				<Button 
					title="Fade Out"
					onPress={fadeOut} />
			</View>
		</> 
	);
}

export default VAnimated