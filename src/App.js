import React from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import TodoItem from "./components/TodoItem";
import TodoFooter from "./components/TodoFooter";
import { UIStore } from "./UIStore";

function App() {
  const todos = UIStore.useState((s) => s.todos);
  const itemsLeft = UIStore.useState((s) => s.itemsLeft);
  const show = UIStore.useState((s) => s.show);

  return (
    <div className="bg-gray-200 mx-3 mt-5 pb-3 lg:w-1/3">
      <NewTodo></NewTodo>
      {todos.map((t, i) => {
        switch (show) {
          case "all":
            return (
              <TodoItem
                todo={t.todo}
                tdid={t.tdid}
                checked={t.checked}
                key={i}
              ></TodoItem>
            );
          case "active":
            if (!t.checked)
              return (
                <TodoItem
                  todo={t.todo}
                  tdid={t.tdid}
                  checked={t.checked}
                  key={i}
                ></TodoItem>
              );
            break;
          case "completed":
            if (t.checked)
              return (
                <TodoItem
                  todo={t.todo}
                  tdid={t.tdid}
                  checked={t.checked}
                  key={i}
                ></TodoItem>
              );
            break;
          default:
            console.log("Bad show state");
            return null;
        }
        return null;
      })}
      <TodoFooter itemsLeft={itemsLeft}></TodoFooter>
    </div>
  );
}

export default App;
