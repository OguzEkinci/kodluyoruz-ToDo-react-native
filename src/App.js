/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
  Dimensions,
  FlatList,
} from 'react-native';

function App() {
  const [doingCount, setDoingCount] = useState(0);
  const [willDo, setWillDo] = useState([]);
  const [text, onChangeText] = useState('');
  function saving() {
    willDo.push(text);
    setDoingCount(() => doingCount + 1);
    onChangeText('');
  }
  function deleting(item, index) {
    willDo.splice(index, 1);
    setDoingCount(() => doingCount - 1);
  }
  function renderItem({item, index}) {
    return (
      <TouchableOpacity
        style={styles.cardDo}
        onLongPress={() => deleting(item, index)}>
        <Text style={{color: 'white', marginLeft: 10, marginRight: 10}}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.doingCountView}>
        <Text style={styles.doingCount}>Yapılacaklar</Text>
        <Text style={styles.doingCount}>{doingCount}</Text>
      </View>
      <FlatList data={willDo} renderItem={renderItem} />
      <View style={styles.saveButtonCardView}>
        <TextInput
          style={styles.saveTextInput}
          onChangeText={onChangeText}
          value={text}
          placeholderTextColor={'#696e71'}
          placeholder={'Yapılacak....'}
          color={'white'}
        />
        <View style={{height: 2, width: 340, backgroundColor: '#5f747f'}} />
        <TouchableOpacity
          disabled={!text}
          style={[
            styles.saveButton,
            text ? {backgroundColor: '#ffa500'} : {backgroundColor: '#808080'},
          ]}
          onPress={() => saving()}>
          <Text style={{color: 'white'}}>Kaydet</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  doingCount: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 26,
  },
  doingCountView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width,
    height: 40,
  },
  saveTextInput: {
    backgroundColor: '#37474f',
    textAlign: 'left',
    height: 40,
    width: 340,
  },
  saveButton: {
    height: 40,
    width: 320,
    margin: 9,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButtonCardView: {
    borderRadius: 10,
    backgroundColor: '#37474f',
    width: 370,
    alignItems: 'center',
  },
  cardDo: {
    width: Dimensions.get('window').width,
    height: 40,
    justifyContent: 'center',
    backgroundColor: '#7da453',
    marginTop: 6,
    borderRadius: 10,
  },
});
