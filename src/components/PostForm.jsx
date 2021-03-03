import React from "react";
import ".././App.css";

const PostForm = (props) => { 
  let state = 
    {title: ''};
  
 
  const submitHandler = event => {
  event.preventDefault()
  const {title} = state;
  const newPost = {
   title, id: Date.now().toString()
   }
   console.log(newPost)

  }

  const changeInput =  event => {
    state = ({title: event.target.value});
    console.log(state.title)

  }
  
  return (
    <form onSubmit={submitHandler}>
      <div className="input">   
        <label htmlFor="title"></label>
        <input 
          type="text"
          id="title"
          title={state.title}
          name="title"
          onChange={changeInput}
          />      
      </div>
      <button type="submit">Push the message</button>  
    </form>
  );
};

export default PostForm;
