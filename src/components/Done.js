import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Done = ({
  task,
  taskDone,
  taskList,
  index,
  setTaskDone,
  setTaskList,
}) => {
  return (
    <>
      <div className="block">
        <input type="checkbox" disabled checked={task.isDone} />
        <p className="line-through">{task.label}</p>
        <span>
          <FontAwesomeIcon
            icon="fa-solid fa-trash-arrow-up"
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
        </span>
      </div>
    </>
  );
};

export default Done;
