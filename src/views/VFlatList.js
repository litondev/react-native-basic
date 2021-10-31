import React from "react";
import {Text,View,FlatList} from "react-native";

const mydata = [
	{
		id :  1,
		title  : 'Title-1',
		name : 'Name-1'
	},
	{
		id : 2,
		title  : 'Title-2',
		name : 'Name-2'
	},
	{
		id : 3,
		title  : 'Title-3',
		name  : 'Name-3'
	}
];

const VFlatList = () => {
	return (
		<>
			<View>
				<FlatList 	
					data={mydata}
					renderItem={data => {					
						const {title,name} = data.item;
						return (
							<View style={{height : 400,backgroundColor : 'white',marginTop : 10}}>
								<Text style={{color : 'black'}}>{title}</Text>
								<Text style={{color : 'black'}}>{name}</Text>
							</View>
						)
					}}
					keyExtractor={item => item.id}/>
			</View>
		</> 
	);
}

export default VFlatList