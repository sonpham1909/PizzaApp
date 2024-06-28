import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

const TextInputDemo = (props) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const inputStyle = [
    props.style,
    st.input,
    isFocused ? st.focusedInput : null,
  ];

  return (
    <View>
      <TextInput
        {...props}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={inputStyle}
        placeholderTextColor={props.placeholderTextColor || '#000'}
      />
    </View>
  );
};

export default TextInputDemo;

const st = StyleSheet.create({
  input: {
    padding: 10,
    borderWidth: 1,
  },
  focusedInput: {
    borderColor: '#F9D678', 
    borderWidth:2// Màu viền khi TextInput được chọn
  },
});