const Input = ({ tasks, setTasks, setTaskList, taskList }) => {
  return (
    <>
      <div className="input">
        <input
          type="text"
          placeholder="new task"
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
    </>
  );
};

export default Input;
