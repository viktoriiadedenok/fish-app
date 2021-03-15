import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import Auth from "./components/Authentication";
import Registration from "./components/Registration";
function App() {
  return (
    <div className="container-md">
      <PostForm />
      <Posts />
      <Auth />
      <Registration />
    </div>
  );
}

export default App;
