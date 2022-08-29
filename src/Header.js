import React,{ useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { Formik } from 'formik';
import { TextInput } from 'react-native';

// const [isModalVisible, setModalVisible] = useState(false);

// const toggleModal = () => {
//   setModalVisible(!isModalVisible);
// };

const Header =({handleAddItem}) => {

    const [isModalOpen, setModalOpen] = useState(false);
    /** MAIN FUNCTIONS */

    useEffect(() => {
      console.log({isModalOpen});
    }, [isModalOpen]);

    const toggleModal = () =>{
      setModalOpen(!isModalOpen);
   }
    // modal for alarm info
    const InputModal = (props)=> {
      return (
        <View  visible={props.visible}>

          {/* formik */}
          <Formik
            initialValues={{
              timestamp:'',
              notes:'',
            }}
            onSubmit={(values)=>{
              handleAddItem(values);
            }}
          >

              {(formikprops)=>
                <Modal isVisible={props.visible} style={styles.modal}>
                <View>
                  <Calendar 
                    onDayPress={(day)=>
                    {formikprops.setFieldValue('timestamp',day)}}
                    value={formikprops.initialValues.timestamp}
                  />
                  <TextInput style={{backgroundColor:'white',marginVertical:30}}
                    placeholder='Enter note'
                    value={formikprops.values.notes}
                    onChangeText={formikprops.handleChange('notes')}
                  />

                  <Button
                  title="Close"
                  color="red"
                  onPress={toggleModal}
                  />
                  {/* Handles the submit part */}
                  <Button
                  style={{marginVertical:20}}
                  title="Confirm"
                  color="red"
                  onPress={formikprops.handleSubmit}
                  />
                </View>
              </Modal>
              }
         

          </Formik>
        
        </View>

      );
    }
    
    // main render component
    return (
        <View>
          <InputModal visible={isModalOpen}/>
          <Button
            title="Add Alarm"
            color="#05D0EB"
            onPress={toggleModal}
            />
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
  // modal:{
  //   flex: 1,
  //   width: '80%',
  //   height: '80%',
  //   backgroundColor: 'white',
  //   alignItems: 'center',
    
  // }
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)'
  },
  modal: {
    width: 300,
    height: 300,
    backgroundColor: 'blue',
  },
});
export default Header;