import {View, Text} from 'react-native';
import React from 'react';
import fonts from '../theme/fonts';
import {Icomment} from '../types/model';
interface IcommentProps {
  comment: Icomment;
}
const Comment = ({comment}: IcommentProps) => {
  return (
    <View>
      <Text style={{padding: 10, marginTop: 5}}>
        Liked by{' '}
        <Text style={{fontWeight: fonts.weight.bold, fontSize: fonts.size.md}}>
          Dilu
        </Text>{' '}
        and <Text style={{fontWeight: fonts.weight.bold}}> 66 others</Text>
      </Text>
      <Text style={{padding: 10, marginTop: 5}}>
        {' '}
        <Text style={{fontWeight: fonts.weight.bold}}>
          {' '}
          {comment.user.username}
        </Text>
        {comment.comment}
      </Text>
    </View>
  );
};

export default Comment;
