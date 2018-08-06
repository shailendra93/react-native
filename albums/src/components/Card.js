import React from 'react';
import {View} from 'react-native';

const card = (props)=>{

    return(
        <View style={styles.containerStyle}>
        {props.children}

        </View>

    );
};

const styles ={

    containerStyle:{
        borderWidth: 1,
        borderRadius: 2,
        borderColor : '#ddd',
        borderBottemWidth:0,
        shadowColor :'#000',
        shadowOffset : {width:0, height:2},
        shadowOpacity : 0.1,
        shadowRadius : 2,
        elevation : 1,
        marginleft :5,
        marginright: 5,
        margintop:10
    }
}

export default Card;