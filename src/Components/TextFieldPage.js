import React, { useEffect, useState } from "react";
import {useSelector, useDispatch } from "react-redux";
import { updateValue} from "../features/Updater";

export default function TextFieldPage() {
    console.log('tf -render');

    const myData = useSelector(state => state.update.value)
    
  const [myTxt, setMyTxt] = useState(myData.text);

  const dispatch = useDispatch();

  const handleChange = (char) => {
    setMyTxt(char);
    dispatch(updateValue(myTxt));
  };


  useEffect(() => {
      console.log('useEff - render');
    dispatch(updateValue({text:myTxt }));
  } , [myTxt])

  return (
    <div>
      <input
        value={myTxt}
        placeholder="Enter Some Text"
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}
