import React from "react";
import {View, Text, TouchableOpacity} from "react-native";

const DataRender = props => {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={props.onDelete.bind(this, props.id)}>
            <View style={{margin:10, padding: 20, backgroundColor:"red"}}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default DataRender;