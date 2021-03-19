import React from "react";
import PostForm from "./PostForm";
import Posts from "./Posts";

const MyListMain = ()=>{
    return(
        <div >
           <h3>My check list</h3>
            <PostForm/>
            <Posts/>
        </div>
    )
}

export default MyListMain;