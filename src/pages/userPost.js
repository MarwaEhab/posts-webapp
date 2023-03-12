import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useParams, useLocation } from "react-router-dom";
import { API } from "../constants/constants";
import PostCard from "../components/postCard";
import Loader from "../components/loader";

function UserPost() {
  const [userPosts, setUserPosts] = useState([]);
  const { userId } = useParams();
  const location = useLocation();
  const userName = location.state?.userName;
  const [isLoadingData, setIsLoadingData] = useState(true);

  useEffect(() => {
    fetch(`${API}users/${userId}/posts`)
      .then((res) => res.json())
      .then((json) => {
        setUserPosts(json);
        setIsLoadingData(false);
      });
  }, []);

  return (
    <div className="App">
      <h1> {userName} Posts</h1>
      {isLoadingData ? (
        <Loader />
      ) : (
        <Grid container spacing={8}>
          {userPosts &&
            userPosts.map((post, index) => (
              <Grid item lg={4} md={6} xs={12} key={index}>
                <PostCard postItem={post} />
              </Grid>
            ))}
        </Grid>
      )}
    </div>
  );
}

export default UserPost;
