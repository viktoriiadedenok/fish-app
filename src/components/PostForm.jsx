import React from "react";
import ".././App.css";

const PostForm = (props) => { 
  let state = {
    title: ""
  }
const submitHandler= event => {
  event.persists()
  event.preventDefault()
 }
 
const changeInput =  event => {
    state.title += String(event.target.value);
   console.log(event.target.value)
  }
  
  return (
    <form onSubmit={submitHandler}>
      <div className="input">   
        <label htmlFor="title"></label>
        <input 
          type="text"
          id="title"
          value={state.title}
          name="title"
          onChange={changeInput}
          />      
      </div>
      <button type="submit">Push the message</button>  
    </form>
  );
};

export default PostForm;
