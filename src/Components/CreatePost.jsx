import { useContext, useRef } from "react";
import { PostList } from "../Store/Post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElemnet = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElemnet.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split("");

    userIdElemnet.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    // alert("Do you want to wish Create Post")


    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        reactions:   {
          likes: 0,
          dislikes: 0,
        },
        userId: userId,
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        addPost(post);
      });
  };

  return (
    <form className="w-50 mx-auto mt-5" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User ID
        </label>
        <input
          ref={userIdElemnet}
          type="text"
          className="form-control"
          id="userId"
          placeholder="Enter your User ID"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          ref={postTitleElement}
          type="text"
          className="form-control"
          id="title"
          placeholder="Enter your post title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          ref={postBodyElement}
          type="text"
          className="form-control"
          id="body"
          rows="4"
          placeholder="How are you feeling today"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          No. of Reactions
        </label>
        <input
          ref={reactionsElement}
          type="text"
          className="form-control"
          id="reactions"
          placeholder="how many people reacted to this post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          ref={tagsElement}
          type="text"
          className="form-control"
          id="tags"
          placeholder="Please enter tags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
