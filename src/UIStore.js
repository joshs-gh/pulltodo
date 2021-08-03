import { Store } from "pullstate";

export const UIStore = new Store({
  show: "all",
  tdid: 1,
  itemsLeft: 0,
  todos: [],
});
