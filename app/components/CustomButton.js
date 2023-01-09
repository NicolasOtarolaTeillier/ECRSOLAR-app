import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function CustomButton({label, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#0484bc',
        padding: 20,
        borderRadius: 30,
        marginBottom: 30,
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: '700',
          fontSize: 20,
          color: '#fff',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
