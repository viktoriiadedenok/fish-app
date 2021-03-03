import "./App.css";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="main">
      <PostForm />
      <Posts posts={[]} />
    </div>
  );
}

export default App;
