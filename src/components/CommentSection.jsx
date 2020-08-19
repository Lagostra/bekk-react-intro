import React from "react";
import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { putComment } from "../server";

const CommentSection = ({ comments: initialComments, imageId }) => {
  const [comments, setComments] = useState(initialComments);
  const addComment = (comment) => {
    return putComment(imageId, comment).then((comment) => {
      setComments([...comments, comment]);
    });
  };

  return (
    <div>
      <h2>Comments</h2>
      {!comments.length && <span>Bli den første til å kommentere!</span>}
      {!!comments.length && (
        <div className="comments">
          {comments.map((comment) => (
            <Comment
              user={comment.username}
              comment={comment.text}
              timestamp={comment.createdDate}
              key={comment.id}
            />
          ))}
        </div>
      )}
      <CommentForm imageId={imageId} addComment={addComment} />
    </div>
  );
};

const Comment = ({ user, comment, timestamp }) => (
  <div className="comment">
    <span className="comment-user">{user}</span>
    <span className="comment-text">{comment}</span>
    <span className="timestamp">{formatDistanceToNow(timestamp)}</span>
  </div>
);

const CommentForm = ({ addComment }) => {
  const [formData, setFormData] = useState({ comment: "" });

  const handleInputChange = (event) => {
    const newData = {
      ...formData,
      [event.target.name]: event.target.value,
    };
    setFormData(newData);
  };

  const handleSubmit = () => {
    const { comment } = formData;

    if (!comment) {
      return;
    }

    addComment(comment).then(() => {
      setFormData({ comment: "" });
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <input
        type="text"
        id="input-comment"
        value={formData.comment}
        onChange={handleInputChange}
        name="comment"
        placeholder="Kommentar"
      />
      <button>Send</button>
    </form>
  );
};

export default CommentSection;
