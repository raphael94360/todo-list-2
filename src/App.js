import "./App.scss";
import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import NotDone from "./components/NotDone";
import Footer from "./components/Footer";
import Done from "./components/Done";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrashCan,
  faTrashArrowUp,
  faListUl,
} from "@fortawesome/free-solid-svg-icons";
library.add(faTrashCan, faTrashArrowUp, faListUl);

function App() {
  const [tasks, setTasks] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [taskDone, setTaskDone] = useState([]);
  return (
    <div className="App">
      <header>
        <Header title={"TODO LIST"} />
      </header>

      <main>
        <Input
          tasks={tasks}
          setTasks={setTasks}
          taskList={taskList}
          setTaskList={setTaskList}
        />

        <div className="container">
          <h2>NOT DONE</h2>
          {taskList.map((task, index) => {
            return (
              <div key={index}>
                <NotDone
                  taskList={taskList}
                  taskDone={taskDone}
                  setTaskDone={setTaskDone}
                  setTaskList={setTaskList}
                  task={task}
                  index={index}
                />
              </div>
            );
          })}
        </div>

        <div className="container">
          <h2> DONE </h2>
          {taskDone.map((task, index) => {
            return (
              <div key={index}>
                <Done
                  task={task}
                  taskDone={taskDone}
                  taskList={taskList}
                  index={index}
                  setTaskDone={setTaskDone}
                  setTaskList={setTaskList}
                />
              </div>
            );
          })}
        </div>
      </main>
      <footer>
        <Footer text={"Made with React by Raphaël"} />
      </footer>
    </div>
  );
}

export default App;
