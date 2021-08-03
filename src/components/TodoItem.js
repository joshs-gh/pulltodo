import React, { useEffect, useRef } from "react";
import { UIStore } from "../UIStore";

function TodoItem(props) {
  const checkbox = useRef(null);

  useEffect(() => {
    checkbox.current.checked = props.checked;
  }, [props.checked]);

  const handleCheck = () => {
    UIStore.update((s) => {
      s.todos.filter((t) => t.tdid === props.tdid)[0].checked =
        checkbox.current.checked;
      checkbox.current.checked ? s.itemsLeft-- : s.itemsLeft++;
    });
  };

  const handleDel = () => {
    UIStore.update((s) => {
      s.todos = s.todos.filter((t) => t.tdid !== props.tdid);
      !props.checked && s.itemsLeft--;
    });
  };

  return (
    <div className="mx-3 p-3 bg-white shadow">
      <div className="flex justify-between">
        <div className="flex flex-row">
          <input
            type="checkbox"
            ref={checkbox}
            className={
              "mt-checkbox mt-checkbox-blue-500hidden overflow-hidden mr-4 my-1 w-5 h-5"
            }
            onClick={handleCheck}
          />
          <label
            className={`flex items-center cursor-pointer select-none transition-all duration-200 ${
              props.checked
                ? "text-gray-500 font-light line-through"
                : "text-gray-700 font-medium"
            }`}
          >
            {props.todo}
          </label>
        </div>
        <button
          className="border-none text-red-200 hover:text-red-600 text-l"
          onClick={handleDel}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
