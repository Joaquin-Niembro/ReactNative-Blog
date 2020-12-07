import React, {useContext, useEffect} from 'react';
import {Context} from '../context/BlogContext';
import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

function IndexScreen({navigation}) {
  const {state, deleteBlogPost} = useContext(Context);
  const nav = useNavigation();
  useEffect(() => {
    nav.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('create')}>
          <Icon name="plus" size={30} color="black" />
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('show', {id: item.id})}>
              <View style={style.row}>
                <Text style={style.title}>{item.title}</Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Icon name="trash" size={30} color="black" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const style = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 18,
  },
  btn: {
    marginBottom: 20,
  },
});
export default IndexScreen;
