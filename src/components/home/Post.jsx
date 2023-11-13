import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Divider } from "react-native-elements";
import { Feather } from "@expo/vector-icons";

const postFooterIcons = [
  {
    name: "Like",
    imageUrl: "https://img.icons8.com/ios/50/like--v1.png",
    LikedImageUrl: "https://img.icons8.com/ios-filled/50/000000/like--v1.png",
  },
  {
    name: "Comment",
    imageUrl:
      "https://img.icons8.com/external-others-inmotus-design/67/000000/external-Comment-basic-elements-others-inmotus-design-3.png",
  },
  {
    name: "Share",
    imageUrl: "https://img.icons8.com/ios-glyphs/30/share--v1.png",
  },
  {
    name: "Save",
    imageUrl: "https://img.icons8.com/ios-filled/50/bookmark-ribbon.png",
  },
];

const Post = ({ post }) => {
  return (
    <View>
      <Divider orientation="vertical" width={10} color="#595959" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <PostFooter />
    </View>
  );
};

const PostFooter = () => {
  return (
    <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
      <View style={{ flexDirection: "row" }}>
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
      <View style={{ alignItems: "flex-end" }}>
        <Icon
          imageUrl={postFooterIcons[3].imageUrl}
          imgStyle={styles.footerIcon}
        />
      </View>
    </View>
  );
};

const PostImage = ({ post }) => {
  return (
    <View style={{ width: "100%" }}>
      <Image
        source={{ uri: post.imageUrl[0] }}
        style={{ height: 450, resizeMode: "cover" }}
      />
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
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
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
            fontWeight: "600",
          }}
        >
          {post.user}
        </Text>
      </View>
      <Feather
        name="more-horizontal"
        size={24}
        color="black"
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
    borderColor: "#ff8501",
  },
  footerIcon: {
    width: 35,
    height: 35,
    margin: 6,
  },
});

export default Post;
