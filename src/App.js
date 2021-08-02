import React, { useState } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import TodoItem from "./components/TodoItem";
import TodoFooter from "./components/TodoFooter";

function App() {
  const [todos, setTodos] = useState([]);
  const [itemsLeft, setItemsLeft] = useState(0);
  const [show, setShow] = useState("all");
  const [tdid, setTdid] = useState(1);

  const newTodo = (e) => {
    setTodos([...todos, { tdid: tdid, todo: e, checked: false }]);
    setItemsLeft(itemsLeft + 1);
    setTdid(tdid + 1);
  };

  const checkedHandler = (tdid, checked) => {
    setItemsLeft(checked ? itemsLeft - 1 : itemsLeft + 1);
    setTodos(
      todos.map((todo) =>
        todo.tdid === tdid
          ? { tdid: todo.tdid, todo: todo.todo, checked: checked }
          : todo
      )
    );
  };

  const showHandler = (s) => {
    setShow(s);
  };

  const delHandler = (tdid) => {
    const t = todos.filter((todo) => todo.tdid !== tdid);
    setTodos(t);
    setItemsLeft(itemsLeft - 1);
  };

  const clearHandler = () => {
    setTodos(todos.filter((todo) => !todo.checked));
  };

  return (
    <div className="bg-gray-200 mx-3 mt-5 pb-3 lg:w-1/3">
      <NewTodo newTodo={newTodo}></NewTodo>
      {todos.map((t, i) => {
        switch (show) {
          case "all":
            return (
              <TodoItem
                todo={t.todo}
                tdid={t.tdid}
                checked={t.checked}
                key={i}
                delHandler={delHandler}
                checkedHandler={checkedHandler}
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
                  delHandler={delHandler}
                  checkedHandler={checkedHandler}
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
                  delHandler={delHandler}
                  checkedHandler={checkedHandler}
                ></TodoItem>
              );
            break;
          default:
            console.log("Bad show state");
            return null;
        }
        return null;
      })}
      <TodoFooter
        itemsLeft={itemsLeft}
        showHandler={showHandler}
        clearHandler={clearHandler}
      ></TodoFooter>
    </div>
  );
}

export default App;
