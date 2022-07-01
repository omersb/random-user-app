import React from "react";

const Card = () => {
  const url = "https://randomuser.me/api/";
  const response = async () => {
    const rest = await fetch(url).then((x) => x.json());
    console.log(rest.results[0]);
  };
  response();
  return <div>Card</div>;
};

export default Card;
