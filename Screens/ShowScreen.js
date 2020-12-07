import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
function ShowScreen({route: {params}, navigation}) {
  const {state} = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === params.id);
  const nav = useNavigation();
  useEffect(() => {
    nav.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('edit', blogPost)}>
          <Icon name="edit" size={30} color="black" />
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
}
const style = StyleSheet.create({});
export default ShowScreen;
