import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

export default class CalendarDiv extends React.Component {
    render(){
        return (
            <View >
              <Calendar style={styles.container}></Calendar>

            </View>
          );
    };
 
}

const styles = StyleSheet.create({
  container: {
    width:400,
    backgroundColor: '#fff',
  },
});