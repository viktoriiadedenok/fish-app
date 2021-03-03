import React from "react";
import ".././App.css";
import Post from "./Post";

const Posts = ({posts}) => {
  if(!posts.length){
    return(
      <div>No posts are here</div>
    )
  }
  return posts.map(post => <Post post={post} key={post}/>)
  
};

export default Posts;
