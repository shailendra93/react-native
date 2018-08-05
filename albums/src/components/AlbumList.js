import React,{Component} from 'react';
import {Text,View} from 'react-native';
import axios from 'axios';
import AlbumDetails from './AlbumDetails';


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

    renderAlbums(){
        return this.state.albums.map(album=> 
        <AlbumDetails key={album.title} album={album}/>
        );
    }
render(){    
    console.log(this.state);
    return (
    <View>     
      {this.renderAlbums()}

    </View>
    );
};
}

export default AlbumList;
