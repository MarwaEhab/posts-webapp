import { Route, Routes } from "react-router-dom";
import Home from "./pages/index";
import PostDetails from "./pages/postDetails";
import UserPost from "./pages/userPost";

// import Header from "./components/header";
// import NotFound from "./pages/notFound";
// import SearchResult from "./pages/searchResult";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts/:id" element={<PostDetails />} />
      <Route path="/:userId" element={<UserPost />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;
