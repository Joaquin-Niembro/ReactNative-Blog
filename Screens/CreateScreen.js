import React, {useContext} from 'react';
import {Context} from '../context/BlogContext';
import {StyleSheet} from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
function CreateScreen({navigation: {navigate}}) {
  const {addBlogPost} = useContext(Context);
  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigate('index'));
      }}
      initialValues={{title: '', content: ''}}
    />
  );
}
const style = StyleSheet.create({});
export default CreateScreen;
