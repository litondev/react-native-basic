import  React from "react";
import {View,StyleSheet} from "react-native";

const VFlex = () => {
	return (
		<>
			<View style={styles.container}>
				<View style={styles.ef_1}>
					<View style={styles.ef_c_1}></View>
					<View style={styles.ef_c_2}></View>
					<View style={styles.ef_c_3}></View>
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container : {
		flex : 1,
		backgroundColor : 'white'
	},

	ef_1 : {
		flex  : 1,
		flexDirection : 'row',
		backgroundColor  : 'red',
	},

	ef_c_1 : {	
		flex : 4,
		backgroundColor : 'blue'
	},

	ef_c_2 : {
		flex : 4,
		backgroundColor : 'green'
	},

	ef_c_3 : {
		flex : 4,
		backgroundColor : 'yellow'
	}
});

export default VFlex