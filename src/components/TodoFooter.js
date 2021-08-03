import React from "react";
import { UIStore } from "../UIStore";

export default function TodoFooter(props) {
  const show = UIStore.useState((s) => s.show);

  return (
    <div className="flex flex-col">
      <div className="mx-3 p-3 bg-white shadow flex justify-between text-gray-500 font-thin items-center">
        <label className="text-xs">
          {props.itemsLeft} {props.itemsLeft === 1 ? "item" : "items"} left
        </label>{" "}
        <div className="flex justify-center text-xs">
          <button
            className={`font-thin mx-1 border-white hover:border-gray-200 border-2 px-1 ${
              show === "all" ? "border-gray-300" : ""
            }`}
            onClick={() =>
              UIStore.update((s) => {
                s.show = "all";
              })
            }
          >
            All
          </button>
          <button
            className={`font-thin mx-1 border-white hover:border-gray-200 border-2 px-1 ${
              show === "active" ? "border-gray-300" : ""
            }`}
            onClick={() =>
              UIStore.update((s) => {
                s.show = "active";
              })
            }
          >
            Active
          </button>
          <button
            className={`font-thin mx-1 border-white hover:border-gray-200 border-2 px-1 ${
              show === "completed" ? "border-gray-300" : ""
            }`}
            onClick={() =>
              UIStore.update((s) => {
                s.show = "completed";
              })
            }
          >
            Completed
          </button>
        </div>
        <button
          className="font-thin hover:underline text-xs"
          onClick={() =>
            UIStore.update((s) => {
              s.todos = s.todos.filter((t) => {
                return !t.checked;
              });
            })
          }
        >
          Clear Completed
        </button>
      </div>
      <div className="bg-white h-2 border-2 w-11/12 m-auto"></div>
      <div className="bg-white h-1 border-1 w-5/6 m-auto"></div>
    </div>
  );
}
