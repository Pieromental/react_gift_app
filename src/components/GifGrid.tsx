// import { useEffect, useState } from "react";
// import { getGifts } from "../helpers/getGifts";
import GifItem from "./GifItem";
import { useGiftFetch } from "../hooks/useGiftFetch";

type Props = {
  category: string;
};

export const GifGrid = ({ category }: Props) => {
  // const [images, setImages] = useState([]);
  // const fetchGifs = async () => {
  //   const gifs = await getGifts(category);
  //   setImages(gifs);
  // };
  // useEffect(() => {
  //   fetchGifs();
  // }, []);
  const { images, isLoading } = useGiftFetch(category);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {isLoading && <p>Cargando...</p>}
        {images.map((image: any) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
