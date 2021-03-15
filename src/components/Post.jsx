import React from "react";
  
const Post = ({post})=>{
    return(
        <p className="mt-3 p-3 mb-2 bg-info text-dark">{post.title} </p>
    )
}
 export default Post;