import React,{ useState } from 'react';
import { StyleSheet,StatusBar, Text, View, Button } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

import Header from './src/Header';
import AlarmList from './src/AlarmList';

import AlarmModule from './src/AlarmModule';
// type Employee = {
//   [key: string]: any;
//   age?: number;
//   tasks?: string[];
// };

export default function App() {
  // MAIN DATA
  const [alarmList, modifyAlarmList] = useState([]);

  const showToast = async ()=>{
    // AlarmModule.showToast('hahaha');

     await AlarmModule.notifyAlarm("1662297870000");
  }
  // add update
  const addItem = (props) =>{
    const {notes, timestamp} = Object(props);
    const {timestamp:unwrappedTimestamp} = Object(timestamp);

    // console.log(notes, day);

    modifyAlarmList(alarmList=>[...alarmList,{
      id:alarmList.length,
      text:notes,
      time:unwrappedTimestamp
    }]);
  }

  return (
    <View style={styles.container}>
        <Header handleAddItem={addItem}/>
        <Calendar style={styles.calendar}></Calendar>
        <Button
            title="Add Alarm Test"
            color="red"
            onPress={showToast}
            />
        <AlarmList data={alarmList}/>
        
        <StatusBar style="false"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  calendar:{
    width:400,
  }
});
