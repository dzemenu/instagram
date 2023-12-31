import {View, FlatList} from 'react-native';
import React from 'react';
import posts from '../assets/data/posts.json';
import FeedPost from '../components/FeedPost';
const HomeScreen = () => {
  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({item}) => <FeedPost post={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;
