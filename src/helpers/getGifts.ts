
export const getGifts = async (category: string) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=jL6OuDX90qbn2APUF6qa1qkEo6S3YcBr&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifts = data.map((img: any) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));
    return gifts;
  };