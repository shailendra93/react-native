import React,{Component} from 'react';
import {Text,View} from 'react-native';
import axios from 'axios';


// Make a component 
class AlbumList extends Component{
    
    state = { albums: []};

    componentWillMount(){
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
        .then((response)=>response.json())
        //.then((responseData)=>{
          //  console.log(responseData);});
            .then((responseData) => this.setState({ albums: responseData }));
        
        
    }
render(){    
    console.log(this.state);
    return (
    <View>
        <Text>AlbumList!!!</Text>

    </View>
    );
};
}

export default AlbumList;
