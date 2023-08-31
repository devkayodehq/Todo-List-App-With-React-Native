import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';


export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
     setTaskItems([...taskItems, task])
     setTask(null);
  }

  const completaTask = (index) =>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      {/* Today's Task */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's task</Text>

        <View style={styles.items}>

          {
            taskItems.map((item, index) => {
              return(
                <TouchableOpacity key={index} onPress={() => completaTask()}>
                    <Task text={item}/>
                </TouchableOpacity>
              )
            })
          }

        </View>

      </View>

      {/* write a task */}
      <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? "padding" : "height"}
      style={styles.writeTaskWrapper}
      >
        <TextInput 
        style={styles.input} 
        placeholder={'Write a task'}  
        value={task}
        onChangeText={text => setTask(text)} 
        />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
           <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity> 
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical:15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#333',
    borderWidth: 1,
    width: 250,

  },
  addWrapper: {
   width: 60,
   height: 60,
   backgroundColor: '#fff',
   borderRadius: 60,
   borderColor: '#C0C0C0',
   borderWidth: 1,
   justifyContent: 'center',
   alignItems:'center'

  },
  addText: {
    
  }
});
