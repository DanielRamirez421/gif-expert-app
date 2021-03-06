import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export default function GifExpertApp({ defaultCategories = ['Homer'] }) {

  const [categories, setCategories] = useState( defaultCategories );

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories }/>
      <hr />
        { categories.map(category => ( <GifGrid key={ category } category={ category } />)) }
    </div>
  );
}
