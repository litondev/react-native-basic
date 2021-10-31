import  React from "react";
import {ScrollView,View,Text} from "react-native";

const VScrollView = () => {
	return (
		<>
			<ScrollView>
				<View>
					{[1,2,3,4,5,6,7,8].map((item) => (
						<View style={{height : 300}}>
							<Text key={item}
								style={{color : 'black'}}>
								Item {item}
							</Text>
						</View>
					))}
				</View>

				<View>
					<ScrollView horizontal>
						{[1,2,3,4,5,6,7,8].map((item) => (
							<View style={{width : 300,height : 100,backgroundColor : 'red'}}>
								<Text key={item}
									style={{color : 'black'}}>
									Item {item}
								</Text>
							</View>
						))}
					</ScrollView>
				</View>				
			</ScrollView>
		</>
	);
}

export default VScrollView;