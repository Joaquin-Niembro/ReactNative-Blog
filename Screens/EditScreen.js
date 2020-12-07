import React, {useContext} from 'react';
import {Context} from '../context/BlogContext';
import {StyleSheet} from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
function EditScreen({route: {params}, navigation: {navigate}}) {
  const {title, content, id} = params;
  const {editBlogPost} = useContext(Context);
  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => navigate('show'));
      }}
      initialValues={{title, content}}
    />
  );
}
const style = StyleSheet.create({});
export default EditScreen;
