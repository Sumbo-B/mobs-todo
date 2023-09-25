import UseStore from "../store/store";
import { useState } from "react";
import { observer } from "mobx-react-lite";

const ToDO = () => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      UseStore.addTask(task.trim());
      setTask("");
    }
  };

  return (
    <div>
      <form action="" className="form" onSubmit={handleSubmit}>
        <label htmlFor="task">New Item</label>
        <input
          type="text"
          id="task"
          value={task}
          placeholder="Add a new task..."
          onChange={(e) => setTask(e.target.value)}
        />
        <button>Add Task</button>
      </form>
      <h2>You have {UseStore.tasks.length} Tasks to Complete</h2>
      <ul>
        {UseStore.tasks.map((t, index) => (
          <li key={index}>
            {t}
            <button onClick={() => UseStore.removeTask(index)}>
              Completed Task
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default observer(ToDO);
