import React from "react";
import Post from "./Post";
import {connect} from "react-redux";

const Posts = ({syncPost}) => {

  if(!syncPost.length){
    return <p className="p-1 mb-2 bg-secondary text-white mt-2 text-center rounded">No posts are here yet.</p>
  }


    return (
    <table className="table"> {syncPost.map(post => <div className=""><Post  post={post} key={post.id}/></div>)}</table>)
    
};

const mapStateToProps = state =>{

  return {
    syncPost: state.post.posts
  }
  
}

export default connect(mapStateToProps, null)(Posts);
