import React, {useState} from "react";
import {View, TextInput, Button, Modal} from 'react-native';

const Score = props=>{
    const [enterScore, setScore] = useState('');

    const scoreHandler = (enterScore)=>{
        setScore(enterScore);
    }

    const addScoreHandle = () => {
        props.onAddScore(enterScore)
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <TextInput onChangeText = {scoreHandler} value={enterScore}
                placeholder="score" style={{borderBottomColor:'black', borderBottomWidth:1, width:"80%"}}/>
                <View style={{ justifyContent: "space-between", flexDirection: "row"}}>
                    <Button title="Cancel" style={{margin:10}} color="red" onPress={props.Cancel}/>
                    <Button title="ADD" onPress={addScoreHandle}/>
                </View>
            </View>
        </Modal>
    );
}

export default Score;