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
    <div className="d-flex justify-content-center">
    <form  className="" onSubmit={submitHandler}>
      <div className="input">   
        <label htmlFor="title"></label>
        <input 
        className="form-control form-control-lg"
          type="text"
          id="title"
          title={state.title}
          name="title"
          onChange={changeInput}
          />      
      </div>  
      <div className="text-center"><button type="submit"  className="btn btn-md btn-primary mt-2">Add to list</button>  </div>
    </form>
    </div>
  );
};

const mapDispatchToProps = {
 createPost
}

export default connect(null, mapDispatchToProps)(PostForm);
