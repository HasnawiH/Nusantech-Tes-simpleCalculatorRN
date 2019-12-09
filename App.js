import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
  CheckBox,
  ToastAndroid,
} from 'react-native';

const App = () => {
  //state input
  const [inputOne, setInputOne] = useState(0)
  const [inputTwo, setInputTwo] = useState(0)
  const [inputThree, setInputThree] = useState(0)

  //state result
  const [result, setResults] = useState(0)

  //state checked
  const [isOneCheck, setIsOneCheck] = useState(false)
  const [isTwoCheck, setIsTwoCheck] = useState(false)
  const [isThreeCheck, setIsThreeCheck] = useState(false)

  //handle Check
  const oneCheck = () => {
    setIsOneCheck(true);
  };
  const twoCheck = () => {
    setIsTwoCheck(true);
  };
  const threeCheck = () => {
    setIsThreeCheck(true);
  };

  //handle Refresh
  const handleRefresh = ()=>{
    setIsOneCheck(false);
    setIsTwoCheck(false);
    setIsThreeCheck(false);
    setInputOne(0)
    setInputTwo(0)
    setInputThree(0)
  }

  //convert to number
  const parsedOne = parseFloat(inputOne)
  const parsedTwo = parseFloat(inputTwo)
  const parsedThree= parseFloat(inputThree)

  //handle operator
  const handlePlus = () =>{
    if(isOneCheck == true && isTwoCheck == true && isThreeCheck ==true){
      setResults( parsedOne+parsedTwo+parsedThree)
    } else if (isOneCheck == true && isTwoCheck == true){
      setResults( parsedOne+parsedTwo)
    } else if (isOneCheck == true && isThreeCheck == true){
      setResults( parsedOne+parsedThree)
    } else if (isTwoCheck == true && isThreeCheck == true){
      setResults(parsedTwo+parsedThree)
    } else {
      ToastAndroid.show('ceklist minimal 2', ToastAndroid.LONG)
    }
  }
  const handleMinus = () =>{
    if(isOneCheck == true && isTwoCheck == true && isThreeCheck ==true){
      setResults( parsedOne-parsedTwo-parsedThree)
    } else if (isOneCheck == true && isTwoCheck == true){
      setResults( parsedOne-parsedTwo)
    } else if (isOneCheck == true && isThreeCheck == true){
      setResults( parsedOne-parsedThree)
    } else if (isTwoCheck == true && isThreeCheck == true){
      setResults(parsedTwo-parsedThree)
    } else {
      ToastAndroid.show('ceklist minimal 2', ToastAndroid.LONG)
    }
  }
  const handleMultiply = () =>{
    if(isOneCheck == true && isTwoCheck == true && isThreeCheck ==true){
      setResults( parsedOne*parsedTwo*parsedThree)
    } else if (isOneCheck == true && isTwoCheck == true){
      setResults( parsedOne*parsedTwo)
    } else if (isOneCheck == true && isThreeCheck == true){
      setResults( parsedOne*parsedThree)
    } else if (isTwoCheck == true && isThreeCheck == true){
      setResults(parsedTwo*parsedThree)
    } else {
      ToastAndroid.show('ceklist minimal 2', ToastAndroid.LONG)
    }
  }
  const handleDivide = () =>{
    if(isOneCheck == true && isTwoCheck == true && isThreeCheck ==true){
      setResults( parsedOne/parsedTwo/parsedThree)
    } else if (isOneCheck == true && isTwoCheck == true){
      setResults( parsedOne/parsedTwo)
    } else if (isOneCheck == true && isThreeCheck == true){
      setResults( parsedOne/parsedThree)
    } else if (isTwoCheck == true && isThreeCheck == true){
      setResults(parsedTwo/parsedThree)
    } else {
      ToastAndroid.show('ceklist minimal 2', ToastAndroid.LONG)
    }
  }

  return (
    <>
      <View style={styles.container}>

        {/* component input and checklist */}
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Input One.."
            style={styles.input}
            onChangeText={text => setInputOne(text)}
            value={inputOne}
          />
          <CheckBox value={isOneCheck} onValueChange={oneCheck} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Input Two.."
            style={styles.input}
            onChangeText={text => setInputTwo(text)}
            value={inputTwo}
          />
          <CheckBox value={isTwoCheck} onValueChange={twoCheck} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Input Three.."
            style={styles.input}
            onChangeText={text => setInputThree(text)}
            value={inputThree}
          />
          <CheckBox value={isThreeCheck} onValueChange={threeCheck}/>
        </View>

        {/* component operator */}
        <View style={styles.inputContainer}>
          <Button
            color="#2c3e50"
            title=" + "
            onPress={handlePlus}
          />
          <Button
            color="#2c3e50"
            title=" - "
            onPress={handleMinus}
          />
          <Button
            color="#2c3e50"
            title=" x "
            onPress={handleMultiply}
          />
          <Button
            color="#2c3e50"
            title=" / "
            onPress={handleDivide}
          />
        </View>

        {/* component result and line */}
        <View style={styles.line} />
        <View style={styles.inputContainer}>
          <Text style={styles.result}>Hasil :</Text>
          <Text style={styles.result}>{result}</Text>
        </View>

        {/* component refresh */}
        <Button
          style={styles.refresh}
          color="#2c3e50"
          title=" Refresh "
          onPress={handleRefresh}
        />
      </View>
      
    </>
  );
};

// styling
const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 10,
  },
  input: {
    width: '60%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  line: {
    width: '80%',
    borderBottomColor: '#333',
    borderBottomWidth: 2,
    marginVertical: 30,
  },
  result: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default App;
