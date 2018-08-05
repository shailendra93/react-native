import React,{Component} from 'react';
import {Text,View} from 'react-native';



// Make a component 
class AlbumList extends Component{
    componentWillMount(){
        console.log("component will mount in debug list");
        
    }
render(){    

    return (
    <View>
        <Text>AlbumList!!!</Text>

    </View>
    );
};
}

export default AlbumList;
