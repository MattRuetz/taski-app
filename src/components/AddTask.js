const AddTask = ({ taskList, setTaskList, task, setTask }) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const date = new Date();

        if (task.id) {
            // If editting an existing task..
            const updatedTaskList = taskList.map((curTask) =>
                curTask.id === task.id
                    ? {
                          id: task.id,
                          name: task.name,
                          time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
                      }
                    : curTask
            );

            setTaskList(updatedTaskList);
            setTask({});
        } else {
            // if creating a new task

            const newTask = {
                id: date.getTime(),
                name: e.target.task.value,
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            };
            setTaskList([...taskList, newTask]);
            setTask({});
        }
    };

    return (
        <section className="addTask">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="task"
                    autoComplete="off"
                    placeholder="Task name.."
                    maxLength="25"
                    value={task.name || ''}
                    onChange={(e) => setTask({ ...task, name: e.target.value })}
                />
                <button type="submit">{task.id ? 'Update' : 'Add'}</button>
            </form>
        </section>
    );
};

export default AddTask;
