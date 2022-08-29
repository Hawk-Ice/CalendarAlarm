import React,{ useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList} from 'react-native';

// const [isModalVisible, setModalVisible] = useState(false);

// const toggleModal = () => {
//   setModalVisible(!isModalVisible);
// };
const AlarmList = (props)=> {


    return (
        
        <View>
            <FlatList
                data={props.data}
                renderItem={({item})=>(
                    <View style={styles.listItem}>
                        <Text>id is {item.id}</Text>
                        <Text>Text is {item.text}</Text>
                        <Text>Time is {item.time}</Text>
                    </View>
                )}
            />
        </View>
    );
}
const styles = StyleSheet.create({
listItem: {
    width:'100%',
    marginBottom:10,
    flex: 1,
    backgroundColor: 'red',
    },
});

export default  AlarmList;