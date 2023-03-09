import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import PostCard from "../components/postCard";

function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => {
        setPosts(json);
        // setIsLoadingData(false);
      });
  }, []);

  return (
    <div className="App">
      <Grid container spacing={8}>
        {posts &&
          posts.map((post, index) => (
            <Grid item lg={4} md={6} xs={12} key={index}>
              <PostCard postItem={post} />
            </Grid>
          ))}
      </Grid>
      <div className="actionBtn">
        {/* <Button size="medium" onClick={() => getPrevious()}>
          Previous
        </Button>
        <Button size="medium" onClick={() => getNext()} className="nextBtn">
          Next
        </Button> */}
      </div>
    </div>
  );
}

export default Home;
