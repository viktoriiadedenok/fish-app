import React from "react";

import {connect} from "react-redux";
import createPost from "../redux/actions";

const PostForm = (props) => { 
  let state = 
    {title: ''};
  
 
  const submitHandler = event => {
  event.preventDefault()
  
  const {title} = state;
 
  if (!title.trim()){
    return
  }

   const newPost = {
   title, id: Date.now().toString()
   } 

   props.createPost(newPost); //dispatch
  }

  const changeInput =  event => {
    state = ({title: event.target.value});
   
  }
  
  return (
    <form onSubmit={submitHandler}>
      <div className="input">   
        <label htmlFor="title"></label>
        <input 
        className="mt-3"
          type="text"
          id="title"
          title={state.title}
          name="title"
          onChange={changeInput}
          />      
      </div>
      <button type="submit" className="btn btn-secondary mt-3">Push the message</button>  
    </form>
  );
};

const mapDispatchToProps = {
 createPost
}

export default connect(null, mapDispatchToProps)(PostForm);
