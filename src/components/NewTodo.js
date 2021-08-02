import React from "react";

function NewTodo(props) {
  return (
    <div className="mx-3 pt-0 pt-3">
      <input
        type="text"
        placeholder="What needs to be done?"
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            props.newTodo(e.target.value);
            e.target.value = "";
          }
        }}
        className="px-3 py-4 placeholder-blueGray-300 italic text-blueGray-600 relative bg-white  text-base border-0 shadow outline-none focus:outline-none focus:ring w-full"
      />
    </div>
  );
}

export default NewTodo;
