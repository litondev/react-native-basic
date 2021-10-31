import  React from "react";
import {View,Text,TextInput} from "react-native";

const VTextInput = () => {
	return (
		<>
			<View>
				<TextInput 
					value="Input 1"
					onChangeText={(value) => console.log(value)}
					style={{color : 'black'}}/>
			</View>

			<View style={{padding : 5}}>
				<TextInput
					value="Input 1"
					style={{borderWidth : 1,borderColor : 'black',color : 'black',padding : 5}} />
			</View>

			<View>
				<TextInput					
					style={{color : 'black'}}
					placeholder="Input 1" />
			</View>

			<View>
				<TextInput 
				 	multiline
        			numberOfLines={4}
					style={{color : 'black',borderBottomWidth : 1}}
					maxLength={40} />
			</View>
		</>
	);
}

export default VTextInput;