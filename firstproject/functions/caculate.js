import React, {useState} from "react";
import {View, TextInput, Button, Modal} from 'react-native';

const Score = props=>{
    const [enterScore, setScore] = useState('');

    const scoreHandler = (enterScore)=>{
        setScore(enterScore);
    }

    return (
        <Modal visible={props.isAddScore}>
            <View style={{flex:1}}>
                <TextInput onChangeText = {scoreHandler} value={enterScore}
                placeholder="score" style={{borderBottomColor:'black', borderBottomWidth:1, width:"80%"}}/>
                <Button title="ADD" onPress={props.onAddScore.bind(this, enterScore)}/>
            </View>
        </Modal>
    );
}

export default Score;