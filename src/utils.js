import { useEffect, useState } from "react";
import { getFeed, getImage } from "./server";

const useTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

const useFeed = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getFeed().then((images) => setImages(images));
  }, []);

  return images;
};

const useImage = (id) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    getImage(id).then((image) => setImage(image));
  }, [id]);

  return image;
};

export { useTitle, useFeed, useImage };
