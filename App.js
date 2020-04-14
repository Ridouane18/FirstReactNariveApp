import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const[courseGoals, setCourseGoals] = useState([]);
  const[isAddMode, setIsAddMode] = useState(false); 

  const  AddGoalHundler = goalTitle => {
      setCourseGoals(currentGoals =>[
        ...currentGoals, 
          {id: Math.random().toString(), 
            value: goalTitle}
      ]);
      setIsAddMode(false);
  };

  const RemoveGoalFundler = goalId =>{
    console.log("fuck off")
    setCourseGoals( currentGoals =>{
      return currentGoals.filter((goal) => goal.id !== goalId);
    })
  }
  const cancelGoalAdd=()=>{
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
      <GoalInput 
        visible={isAddMode} 
        onAddGoal={AddGoalHundler} 
        onCancel={cancelGoalAdd}
      />
      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={courseGoals} 
        renderItem={itemData => 
        <GoalItem  
          id={itemData.item.id} 
          onDelete={RemoveGoalFundler} 
          title={itemData.item.value}/>}
        />
    </View>
  );
} 

const styles = StyleSheet.create({
   screen: {
    padding: 50
   }
});
