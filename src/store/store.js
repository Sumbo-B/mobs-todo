import { makeAutoObservable } from "mobx";

class UseStore {
  tasks = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTask = (task) => {
    this.tasks.push(task);
  };

  removeTask = (index) => {
    this.tasks.splice(index, 1);
  };
}



export default new UseStore();
