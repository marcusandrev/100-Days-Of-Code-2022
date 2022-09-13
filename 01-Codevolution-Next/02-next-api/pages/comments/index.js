import React, { useState } from 'react';

const index = () => {
  const [comments, setComments] = useState([]);

  const onHandle = async () => {
    const response = await fetch('/api/comments');
    const data = await response.json();
    setComments(data);
  };
  return (
    <div>
      <button onClick={onHandle}>Load Comments</button>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            {comment.id} {comment.text}
          </div>
        );
      })}
    </div>
  );
};

export default index;
