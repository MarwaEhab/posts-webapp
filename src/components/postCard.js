import { Link } from "react-router-dom";

function PostCard({ postItem }) {
  const { userId: userId, id: id, title: title, body: body } = postItem || {};

  return (
    <div className="postCard">
      <Link to={`/posts/${id}`} state={{ userId: userId }}>
        <img src="imgs/post1.jpg" alt="post Picture" className="postImg" />
        <div className="cardContent">
          <h2 className="heading">{title}</h2>
          <p>{body}</p>
        </div>
      </Link>
    </div>
  );
}

export default PostCard;
