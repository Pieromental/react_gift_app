import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);
  // const newCategory = "New";
  const onAddCategory = (newCategory: string) => {
    if (categories.includes(newCategory.trim().toUpperCase())) return;
    setCategories([...categories, newCategory.toUpperCase()]);
  };
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onAddCategory={onAddCategory} />

      {categories.map((cat: string, index: number) => (
        <GifGrid key={cat + index} category={cat} />
      ))}
    </>
  );
};
