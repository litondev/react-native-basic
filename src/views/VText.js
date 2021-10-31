import React from "react";
import {Text,View} from "react-native";

const VText = () => {
	return (
		<>
			<View>
				<Text style={{color : 'black'}}>
					Is Only Be In Text
				</Text>
			</View>
			<View>
				<Text style={{color  :'black'}}>
					Inner Text 
					<Text style={{color : 'red'}}> Good </Text>
					Hello
				</Text>
			</View>

			<View>
				<Text style={{color : 'black'}}>
					Text 1 
				</Text>
				<Text style={{color : 'black'}}>
					Text 2
				</Text>
			</View>

			{/* This Style Color Does Working */}
			<View style={{color : 'black'}}>

				{/* This Style Color Is Working */}
				<Text style={{color : 'black'}}>
					<Text>Text 1</Text>
					<Text>Text 2</Text>
				</Text>

				<Text style={{color : 'red'}}> Text 3 </Text>
			</View>
		</> 
	);
}

export default VText