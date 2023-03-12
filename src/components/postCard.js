import { Link } from "react-router-dom";

function PostCard({ postItem }) {
  return (
    <div className="postCard">
      <Link to={`/posts/${postItem.id}`} state={{ userId: postItem.userId }}>
        <img src="imgs/post1.jpg" alt="post Picture" className="postImg" />
        <div className="cardContent">
          <h2>{postItem.title}</h2>
          <p>{postItem.body}</p>
        </div>
      </Link>
    </div>
  );
}

export default PostCard;
