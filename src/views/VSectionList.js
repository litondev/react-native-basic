import React from "react";
import {Text,View,SectionList} from "react-native";

const myData = [
	{
		id : 1,
		title : 'title 1',
		name : 'name 1',
		data: ["Cheese Cake 1", "Ice Cream 2"]
	},
	{
		id : 2,
		title : 'title 2',
		name : 'name 2',
		data: ["Cheese Cake 1", "Ice Cream 2"]
	},
	{
		id : 3,
		title :  'title 3',
		name : 'name 3',
		data: ["Cheese Cake 1", "Ice Cream 2"]
	}
];

const VSectionList = () => {
	return (
		<>
			<View>
				<SectionList
					sections={myData}
					renderItem={item => {
						console.log(item);
						return (
							<View>
								<Text style={{color : 'black'}}>{item.item}</Text>							
							</View>
						)
					}}
					keyExtractor={item => item.id}
					renderSectionHeader={item => (
        				<Text style={{color : 'black',height : 20}}>Item Title</Text>
      				)}/>
			</View>
		</> 
	);
}

export default VSectionList