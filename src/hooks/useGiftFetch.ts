import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifts";

export const useGiftFetch = (category: string) => {
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const fetchGifs = async () => {
    const gifs = await getGifts(category);
    setImages(gifs);
    setLoading(false);
  };
  useEffect(() => {
    fetchGifs();
  }, []);
  return { images, isLoading };
};
