import React from "react";
import Hero from "../components/Hero";

export const Home = (props) => {
  console.log("home", props);
  return (
    <div>
      <Hero userInput={props.userInput} />
    </div>
  );
};
