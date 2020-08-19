import React from "react";
import { Link } from "react-router-dom";

import Image from "./Image";
import Post from "./Post";
import { useTitle, useFeed } from "../utils";

const FeedPage = () => {
  useTitle("Bekkstagram");

  const images = useFeed();

  return (
    <div>
      {images.map((image) => (
        <Post
          key={image.id}
          author={image.username}
          timestamp={image.createdDate}
        >
          <Link to={`/post/${image.id}`}>
            <Image src={image.url} alt={image.description} />
          </Link>
        </Post>
      ))}
    </div>
  );
};
export default FeedPage;
