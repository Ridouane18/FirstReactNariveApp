import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const GoalInput = props =>{
    
  const[enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) =>{
    setEnteredGoal(enteredText);
  };
 
  const addGoalHunler = () =>{
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  }

  return(
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.AddBar}>
          <TextInput 
          placeholder='Get Pussy' 
          style={styles.textinput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
          />
          <View style={styles.buttons}>
            <View style={{marginBottom:10 }}>
            <Button title='ADD' onPress={addGoalHunler} />
            </View>
            <Button color = 'red' title='CANCEL' onPress={ props.onCancel} />
          </View>
      </View>
    </Modal>
  ) 
}

const styles = StyleSheet.create({
    AddBar:{
      flex: 1,
     justifyContent: 'center', 
     alignItems: 'center'
    },
    textinput:{
     width: '80%' ,
     borderBottomColor: 'black', 
     borderBottomWidth: 1, 
     padding: 5, 
     marginBottom: 10
    },
    buttons:{
      marginTop: 10,
      flexDirection: 'column',
      justifyContent:'center',
      width:'70%'
    }
 });

 export default GoalInput;