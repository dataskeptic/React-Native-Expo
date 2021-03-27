import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddItem = ({addItem}) => {
    const [text, setText] = useState('');

    const onChange = (textValue) => {
        setText(textValue);
    }
    return (
        <View style={styles.container}>
            <TextInput 
                placeholder="Add Item..." 
                style={styles.input}
                onChangeText={onChange}
            />
            <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
                <Text style={styles.btnText}><Icon style={styles.Icon} name="plus" size={20} />Add Item</Text>
            </TouchableOpacity>
        </View>
    );
} 

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
    },
  input: {
      height: 40, 
      padding: 8,
      fontSize: 16,
  },
  Icon: {
      paddingHorizontal: 5,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9, 
    margin: 5,
  },
  btnText: {
      color: 'darkslateblue', 
      fontSize: 18,
      textAlign: 'center',
  },
});

export default AddItem;




