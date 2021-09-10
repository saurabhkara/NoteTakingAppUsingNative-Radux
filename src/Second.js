import React,{useState} from 'react'
import { View, StyleSheet, Button } from 'react-native';
import { Text,IconButton, TextInput, FAB } from 'react-native-paper';
import Header from './component/Header';

export default function Second({ navigation}) {
    const [noteTitle,setNoteTitle]=useState('');
    const [noteDesc, setNoteDesc]=useState('')

    // function onSaveNote(){
    //     navigation.state.params.addNotes({noteTitle,noteDesc});
    //     navigation.goBack();
    // }
    // console.log(navigation.state.params)
    return (
        <>
            <Header titleText='Add Notes Here' style={{zIndex:-1}} />
            <IconButton 
                icon="close"
                size={25}
                color='black'
                onPress={()=>navigation.goBack()}
                style={styles.iconButton}
            />
            
            <View style={styles.container}>
            
                <TextInput 
                    label="Add Note Title here"
                    value={noteTitle}
                    mode='outlined'
                    onChangeText={setNoteTitle}
                    style={styles.text}
                />
                <TextInput 
                    label="Add Note Description"
                    value={noteDesc}
                    mode='outlined'
                    onChangeText={setNoteDesc}
                    style={styles.text}
                    multiline={true}
                    style={styles.tex}
                    scrollEnabled={true}
                    returnKeyLabel="done"
                    blurOnSubmit={true}
                />
                <FAB 
                    style={styles.fab}
                    small
                    icon="check"
                    disabled={noteTitle==''? true:false}
                    onPress={()=>onSaveNote()}
                />
                
                {/* <Button title=" " onPress={()=>navigation.goBack()} >Go back </Button> */}
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 20,
        
    },
    iconButton:{
        backgroundColor:'#219653',
        position:'absolute',
        right:12,
        top:25,
        margin:10,
        zIndex:1,
    },
    textContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        flex:1
    },
    text: {
        fontSize: 24,
        marginBottom:16,
    },
    tex:{
        height:100,
        fontSize:16,
    },
    fab:{
        position:'absolute',
        margin:20,
        right:0,
        bottom:0
    }
});
