import React from 'react';

const ShowTask = ({ taskList, setTaskList, task, setTask }) => {
    const handleEdit = (id) => {
        const selectedTask = taskList.find((todo) => todo.id === id);
        setTask(selectedTask);
    };

    const handleDelete = (id) => {
        const updatedTaskList = taskList.filter((todo) => todo.id !== id);
        setTaskList(updatedTaskList);
    };

    return (
        <section className="showTask">
            <div className="head">
                <div>
                    <span className="title">Todo</span>
                    <span className="count">{taskList.length}</span>
                </div>
                <button className="clearAll" onClick={() => setTaskList([])}>
                    Clear All
                </button>
            </div>
            <ul>
                {taskList.map((curTask) => (
                    <li key={curTask.id}>
                        <p>
                            <span className="name">{curTask.name}</span>
                            <span className="time">{curTask.time}</span>
                        </p>
                        <i
                            onClick={() => handleEdit(curTask.id)}
                            className="bi bi-pencil-square"
                        ></i>
                        <i
                            onClick={() => handleDelete(curTask.id)}
                            className="bi bi-trash"
                        ></i>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ShowTask;
