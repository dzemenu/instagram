import {StyleSheet, Image, Text, View, Pressable} from 'react-native';
import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import fonts from '../theme/fonts';
import colors from '../theme/colors';
import Comment from './Comment';
import {IPost} from '../types/model';

interface IFeedPost {
  post: IPost;
}
const FeedPost = ({post}: IFeedPost) => {
  const [isLiked, setIsliked] = useState(false);
  const [ExpandDescription, setExpandDescription] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            source={{
              uri: post.user.image,
            }}
            style={styles.headerImage}
          />
          <Text style={styles.userName}>{post.user.username}</Text>
        </View>
        <Entypo name="dots-three-horizontal" size={24} />
      </View>
      <Image
        source={{
          uri: 'https://github.com/dzemenu/instagram/assets/2013322/2c4692f8-7760-4cc6-a5d0-1b80c6212077',
        }}
        style={styles.image}
      />
      <View style={styles.iconContainer}>
        <Pressable onPress={() => setIsliked(!isLiked)}>
          <AntDesign
            name={isLiked ? 'heart' : 'hearto'}
            size={24}
            style={styles.icons}
            color={isLiked ? colors.accent : colors.black}
          />
        </Pressable>

        <Ionicons name="chatbubble-outline" size={24} style={styles.icons} />
        <Feather name="send" size={24} style={styles.icons} />

        <Feather name="bookmark" size={24} style={{marginLeft: 'auto'}} />
      </View>
      <Text numberOfLines={ExpandDescription ? 0 : 3}>{post.description}</Text>
      <Text onPress={() => setExpandDescription(!ExpandDescription)}>
        {ExpandDescription ? 'less' : 'more'}
      </Text>
      {post.comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </View>
  );
};

export default FeedPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    aspectRatio: 2 / 1,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  headerImage: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  headerLeft: {flexDirection: 'row', alignItems: 'center'},
  userName: {
    color: colors.black,
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.bold,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  icons: {
    marginRight: 5,
  },
});
