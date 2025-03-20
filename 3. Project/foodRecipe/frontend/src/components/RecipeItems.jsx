import React from "react";
import { useLoaderData } from "react-router-dom";
import recipeBanner from "../assets/recipeBanner.jpg";
import { BsFillStopwatchFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";

export default function RecipeItems() {
  const allRecipes = useLoaderData();
  console.log(allRecipes);

  return (
    <>
      <div className="card-container">
        {allRecipes?.map((item, index) => {
          return (
            <div key={index} className="card">
              <img src={recipeBanner} width="120px" height="100px"></img>
              <div className="card-body">
                <div className="title">{item.title}</div>
                <div className="icons">
                  <div className="timer">
                    <BsFillStopwatchFill /> 30min
                  </div>
                  <MdFavorite />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
