import {
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import { useState } from 'react';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
import CheckBox from '@react-native-community/checkbox';

export default function App() {
  const [currNum, setCurrNum] = useState('');
  const [prevNum, setprevNum] = useState();
  const [calculate, setCalculate] = useState('');

  function calculateResult() {
    let nowNum = Number.parseInt(currNum);

    switch (calculate) {
      case '+': {
        setCurrNum(prevNum + nowNum);
        setprevNum(currNum);
        setCalculate('');
        break;
      }
      case '-': {
        setCurrNum(prevNum - nowNum);
        setprevNum(currNum);
        setCalculate('');
        break;
      }
      case '*': {
        setCurrNum(nowNum * prevNum);
        setprevNum(currNum);
        setCalculate('');
        break;
      }
      case '/': {
        setCurrNum(prevNum / nowNum);
        setprevNum(currNum);
        setCalculate('');
        break;
      }
      default: {
        alert('Phép tính không hợp lệ');
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, padding: 20 }}>
        <View
          style={{
            backgroundColor: '#F4F4F4',
            borderWidth: 1,
            height: 30,
            justifyContent: 'center',
            paddingLeft: 10,
            marginBottom: 20,
          }}>
          <Text>{currNum}</Text>
        </View>

        <View style={styles.rowButton}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => setCurrNum((prev) => prev + '1')}>
            1
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => setCurrNum((prev) => prev + '2')}>
            2
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => setCurrNum((prev) => prev + '3')}>
            3
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => setCurrNum((prev) => prev + '0')}>
            0
          </TouchableOpacity>
        </View>
        <View style={styles.rowButton}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => setCurrNum((prev) => prev + '4')}>
            4
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => setCurrNum((prev) => prev + '5')}>
            5
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => setCurrNum((prev) => prev + '6')}>
            6
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              setCurrNum('');
              setprevNum();
              setCalculate('');
            }}>
            Xóa
          </TouchableOpacity>
        </View>
        <View style={styles.rowButton}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => setCurrNum((prev) => prev + '7')}>
            7
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => setCurrNum((prev) => prev + '8')}>
            8
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => setCurrNum((prev) => prev + '9')}>
            9
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => calculateResult()}>
            =
          </TouchableOpacity>
        </View>
        <View style={styles.rowButton}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              setprevNum(Number.parseInt(currNum));
              setCalculate('+');
              setCurrNum('');
            }}>
            +
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              setprevNum(Number.parseInt(currNum));
              setCalculate('-');
              setCurrNum('');
            }}>
            -
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              setprevNum(Number.parseInt(currNum));
              setCalculate('*');
              setCurrNum('');
            }}>
            *
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              setprevNum(Number.parseInt(currNum));
              setCalculate('/');
              setCurrNum('');
            }}>
            /
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  buttonStyle: {
    width: 40,
    height: 40,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowButton: {
    backgroundColor: '#F4F4F4',
    height: 30,
    flexDirection: 'row',
    paddingLeft: 10,
    display: 'flex',
    flexWrap: 4,
    gap: 20,
    marginBottom: 20,
  },
});
