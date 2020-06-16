import React, {useState} from 'react';
import { Platform, StyleSheet, Text, View, Button, ScrollView} from 'react-native';
import { TextInput, FlatList } from 'react-native-gesture-handler';
import DataRender from './functions/dataRender';
import Score from './functions/caculate';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default function App() {
  //const [outputText, setOutputText] = useState('Open react-native'); 
  // const [enterScore, setScore] = useState('');
  const [Scores, setScores] = useState([]);
  const [isAddScore, setIsAddScore] = useState(()=>false);

  // const scoreHandler = (enterScore)=>{
  //   setScore(enterScore);
  // }

  const addScoreHanler = score=>{
    setScores(currentScore=>[...currentScore, 
      {id:Math.random(9).toString(), value:score}]);
  }

  const removeScore = scoreId =>{
    setScores(currentScore => {
      return currentScore.filter((score) => score.id !== scoreId);
    })
  }

  return (
    <View style={{padding:50, justifyContent:"space-between"}}>
        <Button title="Add new score" onPress={()=> setIsAddScore(true)} />

        <Score visible={isAddScore} onAddScore={addScoreHanler}/>

        <FlatList 
        keyExtractor = {(item, index)=>item.id}
        data={Scores} 
        renderItem={itemData => <DataRender onDelete={removeScore.bind(this, itemData.item.id)} title={itemData.item.value}/>}
      />

        {/*<View>
          <TextInput onChangeText = {scoreHandler} value={enterScore}
          placeholder="score" style={{borderBottomColor:'black', borderBottomWidth:1, width:"80%"}}/>
          <Button title="ADD" onPress={addScoreHanler}/>
        </View> */}
        

        {/* <ScrollView>
          {Scores.map((score)=> <View style={{margin:10, backgroundColor:"red"}}><Text>{score}</Text></View>)}
        </ScrollView> */}
    </View>


    // <View style={{
    //     padding:30,
    //     flexDirection: "row",
    //     width:"100%",
    //     height:300, 
    //     justifyContent:'space-around',
    //     alignItems: "stretch"
    //     }}>
   
    //   <View style={{
    //     backgroundColor: 'red',
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     width: "100%"  
    //   }}>
    //     <Text>1</Text>
    //   </View>

    //   <View style={{
    //     backgroundColor: "blue",

    //     justifyContent: "center",
    //     alignItems: "center"  
    //   }}>
    //     <Text>2</Text>
    //   </View>

    //   <View style={{
    //     backgroundColor: "green",

    //     justifyContent: "center",
    //     alignItems: "center"  
    //   }}>
    //     <Text>3</Text>
    //   </View>
    // </View>
    // <View style={styles.container}>
    //   <Text style={styles.welcome}>Welcome to hello world hahhhaa!</Text>
    //   <Text style={styles.instructions}>To get started, edit App.js</Text>
    //   <Text style={styles.instructions}>{instructions}</Text>
    //   <Text>{outputText}</Text>
    //   <Button title="change text" onPress={()=>setOutputText("the text has change")}/>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009688',
    height: 50,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
