import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import PostCard from "../components/postCard";
import Loader from "../components/loader";
import { API } from "../constants/constants";
import LoadBtn from "../components/loadBtn";

function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [visible, setVisible] = useState(20);

  useEffect(() => {
    fetch(`${API}posts`)
      .then((res) => res.json())
      .then((json) => {
        setPosts(json);
        setIsLoadingData(false);
      });
  }, []);

  //List pagination if greater than 20 items
  const showMoreItem = () => {
    setVisible((prev) => prev + 20);
  };

  return (
    <div className="App">
      {isLoadingData ? (
        <Loader />
      ) : (
        <div>
          <h1>Home</h1>
          <Grid container spacing={8}>
            {posts &&
              posts.slice(0, visible).map((post, index) => (
                <Grid item lg={4} md={6} xs={12} key={index}>
                  <PostCard postItem={post} />
                </Grid>
              ))}
          </Grid>
          <LoadBtn title={"Load More"} onClick={showMoreItem} />
        </div>
      )}
    </div>
  );
}

export default Home;
