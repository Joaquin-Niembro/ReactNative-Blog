import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
function BlogPostForm({onSubmit, initialValues}) {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  
  return (
    <View style={style.container}>
      <Text style={style.label}>Enter Title:</Text>
      <TextInput
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={style.input}
      />
      <Text style={style.label}>Enter Content:</Text>
      <TextInput
        value={content}
        onChangeText={(text) => setContent(text)}
        style={style.input}
      />
      <Button title="Save BlogPost" onPress={() => onSubmit(title, content)} />
    </View>
  );
}
const style = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 10,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
  container: {
    margin: 10,
    padding: 10,
    borderColor: 'black',
    borderWidth: 5,
    borderRadius: 5,
  },
});
export default BlogPostForm;
