import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';


const GaolItem = props =>{
    return(
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listeGoals}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    listeGoals:{
      padding: 10,
      marginTop: 10,
      backgroundColor: '#ccc',
      borderColor: 'black',
      borderWidth: 1
    }
});

export default GaolItem;