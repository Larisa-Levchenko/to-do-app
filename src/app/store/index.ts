import { defineStore } from "pinia";
import { ITodo } from "../dto/todo";

interface State {
  toDoList: ITodo[];
}

export const useToDoStore = defineStore({
  id: "toDoStore",
  state: () => ({ toDoList: [] } as State),

  actions: {
    addToDo(toDo: ITodo | null) {
      if (toDo !== null) {
        this.toDoList.push(toDo);
      }
    },
    removeToDoById(id: number) {
      this.toDoList = this.toDoList.filter((toDo) => toDo.id !== id);
    },
    toggleCompleteToDoById(id: number) {
      const toDo = this.toDoList.find((toDo) => toDo.id === id);
      if (toDo) {
        toDo.checked = !toDo.checked;
      }
    },
  },
});
