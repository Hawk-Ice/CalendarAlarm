import React,{ useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Switch} from 'react-native';

// const [isModalVisible, setModalVisible] = useState(false);


// const toggleModal = () => {
//   setModalVisible(!isModalVisible);
// };



const AlarmList = (props)=> {

    const {data, onToggleSwitchHandler} = props;

    const toggleSwitch = ({item})=>{
        const {id, isEnabled} = Object(item);

        onToggleSwitchHandler(id, isEnabled);
        
    }

    return (
        <View>
            <FlatList
                data={data}
                renderItem={({item})=>(
                <View style={styles.listItem}>
                    <View style={styles.alarmInfo}>
                        <Text style={styles.dateText}>September 8, 2022 September 8, 2022 {item.id}</Text>
                        <Text>Text is {item.text}</Text>
                        <Text>Time is {item.time}</Text>
                    </View>
                        <Switch
                            style={styles.switch}
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={'white'}
                            onChange={()=>toggleSwitch({item})}

                            value={item.isEnabled}
                        />
                    <View>
                    </View>
                </View>
                    
                )}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    listItem: {
        marginTop:10,
        padding:15,
        flex: 1,
        flexDirection:'row',
        // alignSelf: 'stretch',
        backgroundColor: 'lightblue',
    },
    dateText: {
        fontSize:20,
        
    },
    alarmInfo: {
        backgroundColor:'white',
        flex:5,
    },
    switch: {
        // backgroundColor: 'lightgreen',
        flex:1,
        transform: [{ scale:1.2}]
    },

});

export default  AlarmList;