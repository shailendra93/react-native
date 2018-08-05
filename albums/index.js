/** @format */
// Import  a library to help create a document

import React from 'react';
import {Text, AppRegistry,View} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a component 
const App =()=> (
/* This is a comment */
   <View>
    <Header headerText={'Albums!'}/>
    <AlbumList/>
    </View>
   
    );
// Render it to the device

AppRegistry.registerComponent('albums', () => App);
