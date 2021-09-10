import React, {useState} from 'react'
import { View, StyleSheet, StatusBar, FlatList} from 'react-native'
import { Text,List, FAB } from 'react-native-paper';
import Header from './component/Header';


export default function First({navigation}) {
    const[notes, setNotes]=useState([]);
    const addNotes=note=>{
        node.id=note.length+1
        setNotes([...notes, note])
    }
    return (
        <>
            <StatusBar />
            <Header titleText="Note Taking App" />
            <View style={styles.container}>
                {notes.length===0?(
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>No Notes Available</Text>
                    </View>
                    ):(
                        <FlatList 
                            keyExtractor={item=>item.id.toString()}
                            data={notes}
                            renderItem={({item})=>(
                                <List.Item
                                    title={item.noteTitle}
                                    desc={item.noteDesc}
                                    descriptionNumberOfLines={1}
                                    titleStyle={styles.listTitle}
                                />

                            )
                        }
                        />
                    )
                }
                
                <FAB
                    style={styles.fab}
                    small
                    icon='plus'
                    label='Add a new Note'
                    onPress={() => navigation.navigate('Second')}
                />

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
    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    text: {
        fontSize: 20,
    },
    fab: {
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 10
    },
    listTitle:{
        fontSize:20
    }
});
