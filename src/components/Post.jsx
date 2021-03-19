import React from "react";

  
const Post = ({post})=>{
    return(
     <strong><p className="mt-3 p-2 mb-2 border border-primary rounded text-muted">{post.title} </p></strong> 
    )
}
 export default Post;