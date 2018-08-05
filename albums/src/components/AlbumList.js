import React,{Component} from 'react';
import {Text,View} from 'react-native';
import axios from 'axios';


// Make a component 
class AlbumList extends Component{
    componentWillMount(){
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
        .then((response)=>response.json())
        .then((responseData)=>{
            console.log(responseData);
        });
        
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
