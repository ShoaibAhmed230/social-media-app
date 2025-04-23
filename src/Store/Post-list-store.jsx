import { createContext, useCallback, useReducer, useState, useEffect } from "react";

export const PostList = createContext({
  postList: [],
  fetching: false,
  addPost: () => {},
  deletePost: () => {},

});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIALS_POST") {
    newPostList = action.payload.posts;
  }
   else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, DispatchPostList] = useReducer(
    postListReducer,
    []
  );

  const [fetching, setFetching] = useState(false);

 

  const addPost = (post) => {
    DispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const addInitialPosts = (posts) => {
    DispatchPostList({
      type: "ADD_INITIALS_POST",
      payload: {
        posts,
      },
    });
  };

  const deletePost = useCallback(
    (postId) => {
        DispatchPostList({
          type: "DELETE_POST",
          payload: {
            postId,
          },
        });
      }, [DispatchPostList]
  )


  useEffect(() => {
    setFetching(true);

    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  
  return (
    <PostList.Provider value={{ postList, addPost, fetching, deletePost }}>
      {children}
    </PostList.Provider>
  );
};


export default PostListProvider;
