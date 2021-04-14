import React from 'react'
import ReactDom from 'react-dom'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App=()=>{
    return (
 <div className="ui container comments">
     <ApprovalCard>
  <CommentDetail author="Sam" date="8pm" image="https://source.unsplash.com/1600x900/people" message="Excellent post!!"/>
  </ApprovalCard>
  <ApprovalCard>
  <CommentDetail author="Gokul" date="10am" image="https://source.unsplash.com/1600x900/men" message="Good post!!"/>
  </ApprovalCard>
  <ApprovalCard>
  <CommentDetail author="Jane" date="12pm" image="https://source.unsplash.com/1600x900/women" message="Bad post!!"/>
  </ApprovalCard>
</div>

    );
    
};

ReactDom.render(<App/>,document.querySelector('#root'))
