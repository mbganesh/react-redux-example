import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateValue } from "../features/Updater";
import { showData } from "../features/StoreData";

export default function ButtonPage() {
  console.log("btn -render");

  const myData = useSelector((state) => state.update.value);

  const showDB = useSelector((state) => state.store.value);

  const dispatch = useDispatch();

  const handleUpdate = () => {
    // dispatch(updateValue(myData));
    dispatch(showData(myData));
  };

  return (
    <div>
      <button onClick={() => handleUpdate()}> Update </button>
    </div>
  );
}
