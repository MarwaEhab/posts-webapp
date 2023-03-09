import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useParams, useLocation } from "react-router-dom";
import { API } from "../constants/constants";
import { Link } from "react-router-dom";

function PostDetails() {
  const [postDetails, setPostDetails] = useState([]);
  const [userData, setUserData] = useState([]);
  const [comments, setCommonets] = useState([]);
  const { id } = useParams();
  const location = useLocation();
  const userId = location.state?.userId;

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
        setCommonets(json);
      });
  }, []);

  return (
    <div className="App">
      <h1>{postDetails.title}</h1>
      <p>{postDetails.body}</p>
      <Link to={`/${userId}`} state={{ userName: userData && userData.name }}>
        <h1>{userData && userData.name}</h1>
      </Link>
      <h4>{userData && userData.phone}</h4>
      <h4>{userData && userData.company && userData.company.name}</h4>
      <div className="commentSection">
        {comments.map((comment) => (
          <div className="comment">
            <img src="/imgs/user.png" alt="user Picture" className="useImg" />

            <p>{comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostDetails;
