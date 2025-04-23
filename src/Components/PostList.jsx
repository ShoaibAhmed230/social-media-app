import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../Store/Post-list-store";
import WelcomeMsg from "./WecomeMsg";
import LoadingSpinner from "./LoadingSpinner";

const Postist = () => {
  const { postList, fetching } = useContext(PostListData);
  

  return (
    <>
      {fetching && <LoadingSpinner></LoadingSpinner>}
      {!fetching && postList.length === 0 && <WelcomeMsg></WelcomeMsg>}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default Postist;
