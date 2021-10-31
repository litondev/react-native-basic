import React from "react";
import {Text,View,StyleSheet} from "react-native";

const VStyleSheet = () => {
	return (
		<>
			<View style={styles.container}>
				<Text style={styles.text}>
					Text 1
				</Text>
			</View>

			<View style={combineContainer}>
				<Text style={combineText}>
					Text 2
				</Text>
			</View>

			<View style={{position : 'relative'}}>
				<View style={{width : 50,height : 50,backgroundColor : 'red',position: 'absolute',right : 0}}></View>
				<View style={{width : 50,height : 50,backgroundColor : 'blue',...StyleSheet.absoluteFill,}}></View>				
			</View>
		</> 
	);
}

const styles = StyleSheet.create({
	text : {
		color : 'black'
	},
	container : {
		backgroundColor : 'red'
	}
});


const styles1 = StyleSheet.create({
	text  : {
		color  : 'black'
	}
});

const styles2 = StyleSheet.create({
	text : {
		color : 'red',
	},
	container : {
		backgroundColor : 'blue'
	}
});

const combineContainer = StyleSheet.compose(styles1.container,styles2.container);
const combineText = StyleSheet.compose(styles1.text,styles2.text)

export default VStyleSheet