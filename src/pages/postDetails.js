import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { API } from "../constants/constants";
import { Link } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import BusinessIcon from "@mui/icons-material/Business";
import SendIcon from "@mui/icons-material/Send";
import Loader from "../components/loader";

function PostDetails() {
  const [postDetails, setPostDetails] = useState([]);
  const [userData, setUserData] = useState([]);
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  const location = useLocation();
  const userId = location.state?.userId;
  const [newComment, setNewComment] = useState("");
  const [isLoadingData, setIsLoadingData] = useState(true);

  useEffect(() => {
    fetch(`${API}posts/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setPostDetails(json);
      });

    fetch(`${API}users/${userId}`)
      .then((res) => res.json())
      .then((json) => {
        setUserData(json);
      });

    fetch(`${API}posts/${id}/comments`)
      .then((res) => res.json())
      .then((json) => {
        setComments(json);
        setIsLoadingData(false);
      });
  }, []);

  const handleAddComment = (event) => {
    event.preventDefault();
    fetch(`${API}posts/${id}/comments`, {
      method: "POST",
      body: JSON.stringify({
        postId: 1,
        name: "id labore ex et quam laborum",
        email: "Eliseo@gardner.biz",
        body: newComment,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setComments([...comments, json]);
      });
    setNewComment("");
  };

  return (
    <div className="postDetails">
      {isLoadingData ? (
        <Loader />
      ) : (
        <>
          <img
            src="/imgs/post1.jpg"
            alt="post Picture"
            className="postDetailsImg"
          />
          <h1>{postDetails.title}</h1>
          <p>{postDetails.body}</p>
          <Link
            to={`/${userId}`}
            state={{ userName: userData && userData.name }}
          >
            <div className="userName">
              <img src="/imgs/user.png" alt="user Picture" className="useImg" />
              <h3>{userData && userData.name}</h3>
            </div>
          </Link>
          <h4>
            <PhoneIcon />
            {userData && userData.phone}
          </h4>
          <h4>
            <BusinessIcon />
            {userData && userData.company && userData.company.name}
          </h4>
          <div className="commentSection">
            {comments &&
              comments.map((comment, index) => (
                <div className="comment" key={index}>
                  <img
                    src="/imgs/user.png"
                    alt="user Picture"
                    className="useImg"
                  />
                  <p>{comment.body}</p>
                </div>
              ))}
            <div className="commentInput">
              <form onSubmit={handleAddComment}>
                <input
                  type="text"
                  placeholder="write your comment"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />
                <button>
                  <SendIcon />
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default PostDetails;
