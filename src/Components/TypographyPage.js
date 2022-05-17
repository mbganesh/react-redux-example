import React from "react";
import { useSelector } from "react-redux";


export default function TypographyPage() {
  console.log("typ -render");

  const myData = useSelector(state => state.store.value)

  return (
    <div>
      <h1> {myData.text} </h1>
    </div>
  );
}
