import React, { useState } from "react";

export default function TodoFooter(props) {
  const [show, setShow] = useState("all");

  const showHandler = (s) => {
    setShow(s);
    props.showHandler(s);
  };

  return (
    <div className="flex flex-col">
      <div className="mx-3 p-3 bg-white shadow flex justify-between text-gray-500 font-thin items-center">
        <label className="text-xs">
          {props.itemsLeft} {props.itemsLeft === 1 ? "item" : "items"} left
        </label>{" "}
        <div className="flex justify-center">
          <button
            className={`font-thin mx-1 border-white hover:border-gray-200 border-2 px-1 ${
              show === "all" ? "border-gray-300" : ""
            }`}
            onClick={() => showHandler("all")}
          >
            All
          </button>
          <button
            className={`font-thin mx-1 border-white hover:border-gray-200 border-2 px-1 ${
              show === "active" ? "border-gray-300" : ""
            }`}
            onClick={() => showHandler("active")}
          >
            Active
          </button>
          <button
            className={`font-thin mx-1 border-white hover:border-gray-200 border-2 px-1 ${
              show === "completed" ? "border-gray-300" : ""
            }`}
            onClick={() => showHandler("completed")}
          >
            Completed
          </button>
        </div>
        <button
          className="font-thin hover:underline"
          onClick={props.clearHandler}
        >
          Clear Completed
        </button>
      </div>
      <div className="bg-white h-2 border-2 w-11/12 m-auto"></div>
      <div className="bg-white h-1 border-1 w-5/6 m-auto"></div>
    </div>
  );
}
