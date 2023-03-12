import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import PostDetails from "./pages/postDetails";
import UserPost from "./pages/userPost";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts/:id" element={<PostDetails />} />
      <Route path="/:userId" element={<UserPost />} />
    </Routes>
  );
}

export default App;
