import React, {useState} from "react";
import { Button, Text, View } from "react-native";
import Modal from "react-native-modal";

export default function ModalTester() {

//   const [isModalVisible, setModalVisible] = useState(false);

//   const toggleModal = () => {
//     setModalVisible(!isModalVisible);
//   };
        return (
            <View style={{ flex: 1 }}>
            <Modal isVisible="true">
                <View style={{ flex: 1 }}>
                <Text>Hello!</Text>
                </View>
            </Modal>
            </View>
        );
}
