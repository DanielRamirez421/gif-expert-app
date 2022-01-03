import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export default function GifExpertApp() {

  // const categories = ['OnePunch', 'SamuariX', 'DragonBall']
  const [categories, setCategories] = useState([ "OnePunch", "SamuariX", "DragonBall"]);
  // const handleAdd = () => {
  //   // setCategories( [ ...categories, 'new Element' ] )
  //   setCategories((cats) => [...cats, "new Element"]);
  // };

  return (
    <div>
      <h2> GifExpertApp </h2>
      <AddCategory setCategories={ setCategories }/>
      <hr />

      <ol>
        {
          categories.map((category, i) => (
            <li key={ i }>{ category }</li>
          ))
        }
      </ol>
    </div>
  );
}
