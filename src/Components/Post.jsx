import { useContext } from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PostList } from "../Store/Post-list-store";
import { BiDislike } from "react-icons/bi";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div
      className="card post-card"
      style={{ width: "30rem", margin: "2rem auto " }}
    >
      {/* <img src="..." className="card-img-top" alt="..."> */}
      <div className="card-body">
        <div className="profile-pic-title d-flex">
          <div className="profile-pic d-flex align-items-center mb-2">
            {/* <img className="mr-2" src={post.userImg} alt="profilepic" /> */}
            {/* <h3>{post.userName}</h3> */}
          </div>
        </div>
        <h5 className="card-title">{post.title}</h5>
        <span className="text-primary">{post.tags}</span>
        <p
          className="card-text d-flex align-items-center"
          style={{ minHeight: "4rem" }}
        >
          {post.body}
        </p>

        <div className="d-flex justify-content-between align-items-center">
          <button
            type="button"
            className="btn btn-secondary position-relative w-90 m-2"
          >
            <FaRegThumbsUp />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {post.reactions?.likes ?? 0}
            </span>
          </button>

          <button
            type="button"
            className="btn btn-secondary position-relative w-90 m-2"
          >
            <BiDislike />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {post.reactions?.dislikes ?? 0}
              
            </span>
          </button>
          <button
            className="btn btn-secondary w-90 m-2"
            onClick={() => deletePost(post.id)}
          >
            <RiDeleteBin6Line />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
