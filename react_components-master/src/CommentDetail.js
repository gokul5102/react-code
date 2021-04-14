import React from 'react'

const CommentDetail=(props)=>{
    return (
  <div className="comment">
    <a href="/" className="avatar">
      <img src={props.image} alt="avatar" />
    </a>
    <div className="content">
      <a href="/" className="author">
        {props.author}
      </a>
      <div className="metadata">
        <span className="date">Today at {props.date}</span>
      </div>
      <div className="text">{props.message}
      </div>
      </div>
      </div>
    );
    };

    export default CommentDetail;