import React from 'react'
import { View, StyleSheet } from 'react-native';
import { Appbar,Title} from 'react-native-paper';

export default function Header({titleText}) {
    return (
        <Appbar.Header style={styles.header}>
            <View style={styles.container}>
                <Title style={styles.title}>{titleText}</Title>
            </View>
        </Appbar.Header>
    )
}
const styles = StyleSheet.create({
    header:{
        backgroundColor:'#858383',
        height:40,
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        color:'white',
        
        
    }

})