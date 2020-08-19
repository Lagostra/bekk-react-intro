import React from "react";
import { useState } from "react";
import { formatDistanceToNow } from "date-fns";

import CommentSection from "./CommentSection";

const Post = ({ author, timestamp, children, comments, imageId }) => {
  const [likes, updateLikes] = useState(0);

  return (
    <div className="post">
      <div className="author">{author}</div>
      {children}
      <div className="timestamp">{formatDistanceToNow(timestamp)}</div>
      <span>Likes: {likes}</span>
      <button className="like-button" onClick={() => updateLikes(likes + 1)}>
        👍
      </button>

      {comments && <CommentSection comments={comments} imageId={imageId} />}
    </div>
  );
};

export default Post;
