import React from "react";
import {Text,View,Switch} from "react-native";

const VSwitch = () => {
	return (
		<>
			<View>
				<Switch
				  	trackColor={{ false: "#767577", true: "#81b0ff" }}
        			thumbColor={false ? "#f5dd4b" : "#f4f3f4"}
        			onValueChange={(e) => console.log(e)}
        			value={true} />
			</View>
		</> 
	);
}

export default VSwitch