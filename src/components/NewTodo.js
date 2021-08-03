import React from "react";
import { UIStore } from "../UIStore";

function NewTodo(props) {
  const todos = UIStore.useState((s) => s.todos);
  const tdid = UIStore.useState((s) => s.tdid);

  return (
    <div className="mx-3 pt-0 pt-3">
      <input
        type="text"
        placeholder="What needs to be done?"
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            UIStore.update((s) => {
              s.todos = [
                ...todos,
                { tdid: tdid, todo: e.target.value, checked: false },
              ];
              s.tdid++;
              s.itemsLeft++;
            });
            e.target.value = "";
          }
        }}
        className="px-3 py-4 placeholder-blueGray-300 italic text-blueGray-600 relative bg-white  text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"
      />
    </div>
  );
}

export default NewTodo;
