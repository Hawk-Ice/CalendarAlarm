import React,{ useEffect, useState } from 'react';
import { StyleSheet,StatusBar, Text, View, Button } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

import Header from './src/Header';
import AlarmList from './src/AlarmList';
import FirstTypescript from './src/FirstTypescript';

import AlarmModule from './src/AlarmModule';
// type Employee = {
//   [key: string]: any;
//   age?: number;
//   tasks?: string[];
// };

export default function App() {
  // MAIN DATA
  const [alarmList, modifyAlarmList] = useState([]);
  

  // const showToast = async (alarmTime)=>{
  //   var currentTime = Math.floor(new Date().getTime()/1000.0);
  //   if(currentTime>)
  //    await AlarmModule.notifyAlarm(alarmTime);
  // }



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

  const addSampleItem = (props) =>{ 
    modifyAlarmList(alarmList=>[...alarmList,
      {
        id:alarmList.length,
        text:"notes"+alarmList.length,
        time:"unwrappedTimestamp"+alarmList.length,
        isEnabled:false,
      }
    ]);
  }

  const updateIsEnabledProps = (id, isEnabled) => {
		const newState = alarmList.map(obj => {
		  // 👇️ if id equals 2, update country property
		  if (obj.id === id) {
			  return {...obj, isEnabled: !isEnabled};
		  }

		  // 👇️ otherwise return object as is
		  return obj;
		});
		modifyAlarmList(newState);
	};


  useEffect(()=>{

    // Listening to all
    console.log(alarmList);
    
  });


  return (
    <View style={styles.container}>
        <Header handleAddItem={addItem}/>
        <Calendar style={styles.calendar}></Calendar>
        <Button
            title="Add Alarm Test"
            color="red"
            onPress={addSampleItem}
            />
        <AlarmList data={alarmList} onToggleSwitchHandler={updateIsEnabledProps}/>
        
        <StatusBar style="false"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'flex-start',
  },
  calendar:{
    width:400,
  }
});
