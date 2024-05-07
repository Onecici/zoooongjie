import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {load, save} from '../../utils/Storage';

export default function Test({navigation}: any) {
  const [text, setText] = useState('');

  const saveIptVal = () => {
    save('ipt', text);
  };

  const loadIptVal = async () => {
    const res = await load('ipt');
    console.log(res);
  };

  const onChangeText = (val: string) => {
    setText(val);
  };

  return (
    <View style={style.aa}>
      <Text>Test Page</Text>
      <TextInput
        style={style.int}
        placeholder="请输入..."
        onChangeText={onChangeText}
        value={text}
      />
      <View style={style.btnBox}>
        <Button title="About" onPress={() => navigation.navigate('About')} />
        <Button title="Save Input" onPress={() => saveIptVal()} />
        <Button title="Load Input" onPress={() => loadIptVal()} />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  btnBox: {
    width: '30%',
  },
  aa: {
    justifyContent: 'center',
  },
  int: {
    backgroundColor: '#ccc',
  },
});
