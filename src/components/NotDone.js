import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NotDone = ({
  taskList,
  taskDone,
  setTaskDone,
  setTaskList,
  index,
  task,
}) => {
  return (
    <>
      <div className="block">
        <input
          type="checkbox"
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
        <span>
          <FontAwesomeIcon
            icon="fa-solid fa-trash-can"
            onClick={() => {
              const tab = [...taskList];
              tab.splice(index, 1);
              setTaskList(tab);
            }}
          />
        </span>
      </div>
    </>
  );
};

export default NotDone;
