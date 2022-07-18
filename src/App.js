import "./App.scss";
import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashCan, faTrashArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faTrashCan, faTrashArrowUp);

function App() {
  const [tasks, setTasks] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [taskDone, setTaskDone] = useState([]);
  const [mode, setMode] = useState(true);
  return (
    <div className='App'>
      <h1>TODO LIST</h1>
      <button
        onClick={() => {
          setMode(false);
          console.log(mode);
          if (mode === false) {
            <body className='dark'></body>;
          }
        }}
      >
        dark mode
      </button>
      <div>
        {taskList.map((task, index) => {
          return (
            <div key={index}>
              {" "}
              <input
                type='checkbox'
                checked={task.isDone}
                onChange={() => {
                  const tab = [...taskList];
                  const tab2 = [...taskDone];
                  tab[index].isDone = !tab[index].isDone;
                  if (tab[index].isDone === true) {
                    tab2.push(tab[index]);
                    setTaskDone(tab2);
                    tab.splice(index, 1);
                    setTaskList(tab);
                  }
                }}
              ></input>
              <p> {task.label} </p>
              <FontAwesomeIcon
                icon='fa-solid fa-trash-can'
                onClick={() => {
                  const tab = [...taskList];
                  tab.splice(index, 1);
                  setTaskList(tab);
                }}
              />
            </div>
          );
        })}
      </div>

      <div>
        <input
          type='text'
          placeholder='new task'
          value={tasks}
          onChange={(event) => {
            setTasks(event.target.value);
          }}
        />
        <button
          onClick={() => {
            const tab = [...taskList];
            const obj = { label: tasks, isDone: false };
            tab.push(obj);
            setTaskList(tab);
            setTasks("");
          }}
        >
          ADD TASK
        </button>
      </div>

      <div>
        {taskDone.map((task, index) => {
          return (
            <div key={index} className='done'>
              <input type='checkbox' disabled checked={task.isDone} />
              <p>{task.label}</p>
              <FontAwesomeIcon
                icon='fa-solid fa-trash-arrow-up'
                onClick={() => {
                  const tab = [...taskDone];
                  const tab2 = [...taskList];
                  tab[index].isDone = false;
                  tab2.push(tab[index]);
                  setTaskList(tab2);
                  tab.splice(index, 1);
                  setTaskDone(tab);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
