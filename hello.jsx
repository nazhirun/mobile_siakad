import {Text, View} from 'react-native';
import React, {Component} from 'react';

function Hello() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 24,
        }}>
        Hello world
      </Text>
    </View>
  );
}

export default Hello;
