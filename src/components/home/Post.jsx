import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Divider } from 'react-native-elements';
import { Feather } from '@expo/vector-icons';
import ImageSlider from './ImageSlider';

const postFooterIcons = [
  {
    name: 'Like',
    imageUrl: 'https://img.icons8.com/ios/50/like--v1.png',
    LikedImageUrl: 'https://img.icons8.com/ios-filled/50/000000/like--v1.png',
  },
  {
    name: 'Comment',
    imageUrl: 'https://img.icons8.com/ios/50/speech-bubble--v1.png',
  },
  {
    name: 'Share',
    imageUrl: 'https://img.icons8.com/ios/50/paper-plane--v1.png',
  },
  {
    name: 'Save',
    imageUrl: 'https://img.icons8.com/pastel-glyph/64/bookmark-ribbon.png',
  },
];

const Post = ({ post }) => {
  return (
    <View>
      <Divider orientation='vertical' width={10} color='#595959' />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 10, marginTop: 10 }}>
        <PostFooter />
        <Likes post={post} />
        <Caption post={post} />
        <Hashes post={post} />
        <CommentSection post={post} />
        <Comments post={post} />
      </View>
    </View>
  );
};

const PostImage = ({ post }) => {
  return (
    <View style={{ width: '100%' }}>
      {/* <Image
        source={{ uri: post.imageUrl[0] }}
        style={{ height: 450, resizeMode: 'cover' }}
      /> */}
      <ImageSlider post={post} />
    </View>
  );
};

const Comments = ({ post }) => {
  return (
    <View>
      {post.comments.map((comment, index) => (
        <View
          key={`comments-${index}`}
          style={{ flexDirection: 'row', marginTop: 5 }}
        >
          <View>
            <Text>
              <Text style={{ fontWeight: '600' }}>
                {comment.user}
                {'  '}
              </Text>
              {comment.comment}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const CommentSection = ({ post }) => {
  return (
    <View style={{ marginTop: 5 }}>
      {/* double negation(이중부정) : 데이터 타입을 boolean으로 바꾸고 싶을때 사용 */}
      {!!post.comments.length && (
        <Text style={{ color: 'gray' }}>
          View {post.comments.length > 1 ? 'all' : ''}
          {post.comments.length}{' '}
          {post.comments.length > 1 ? 'Comments' : 'Comment'}
        </Text>
      )}
    </View>
  );
};

const Hashes = ({ post }) => {
  return (
    <View style={{ marginTop: 4, flexDirection: 'row' }}>
      {post.hashes.map((hashTag, index) => (
        <Text
          style={{ color: '#0000ee', marginHorizontal: 4 }}
          key={`hashes-${index}`}
        >
          #{hashTag}
        </Text>
      ))}
    </View>
  );
};

const Caption = ({ post }) => {
  return (
    <View style={{ flexDirection: 'row', marginTop: 5 }}>
      <Text>
        <Text style={{ fontWeight: '500', marginRight: 5, fontSize: 16 }}>
          {post.user}
        </Text>
        {post.caption}
      </Text>
    </View>
  );
};

const Likes = ({ post }) => {
  return (
    <View style={{ flexDirection: 'row', marginTop: 3 }}>
      <Image
        source={{ uri: 'https://img.icons8.com/ios-filled/50/filled-like.png' }}
        style={{ width: 20, height: 20 }}
      />
      <Text>{post.likes.toLocaleString()} Likes</Text>
    </View>
  );
};

const PostFooter = () => {
  return (
    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
      <View style={{ flexDirection: 'row' }}>
        <Icon
          imageUrl={postFooterIcons[0].imageUrl}
          imgStyle={styles.footerIcon}
        />
        <Icon
          imageUrl={postFooterIcons[1].imageUrl}
          imgStyle={styles.footerIcon}
        />
        <Icon
          imageUrl={postFooterIcons[2].imageUrl}
          imgStyle={styles.footerIcon}
        />
      </View>
      <View style={{ alignItems: 'flex-end' }}>
        <Icon
          imageUrl={postFooterIcons[3].imageUrl}
          imgStyle={styles.footerIcon}
        />
      </View>
    </View>
  );
};

const Icon = ({ imageUrl, imgStyle }) => {
  return (
    <TouchableOpacity>
      <Image source={{ uri: imageUrl }} style={imgStyle} />
    </TouchableOpacity>
  );
};

const PostHeader = ({ post }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          margin: 8,
        }}
      >
        <Image
          source={{ uri: post.profile_picture }}
          style={styles.userProfile}
        />
        <Text
          style={{
            marginLeft: 10,
            fontWeight: '600',
          }}
        >
          {post.user}
        </Text>
      </View>
      <Feather
        name='more-horizontal'
        size={24}
        color='black'
        style={{ marginRight: 8 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  userProfile: {
    width: 35,
    height: 35,
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: '#ff8501',
  },
  footerIcon: {
    width: 35,
    height: 35,
    margin: 6,
  },
});

export default Post;
