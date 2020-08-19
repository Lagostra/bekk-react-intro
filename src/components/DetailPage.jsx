import React from "react";
import { useParams } from "react-router-dom";

import Image from "./Image";
import Post from "./Post";

import { useTitle, useImage } from "../utils";

const DetailPage = () => {
  const { id } = useParams();
  const image = useImage(id);

  const title = image ? `📷 av ${image.username}` : "Bekkstagram";
  useTitle(title);

  if (!image) {
    return null;
  }

  return (
    <Post
      key={image.id}
      author={image.username}
      timestamp={image.createdDate}
      comments={image.comments}
      imageId={image.id}
    >
      <Image src={image.url} alt={image.description} />
    </Post>
  );
};

export default DetailPage;
