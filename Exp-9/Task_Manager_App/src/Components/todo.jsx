import React, { useState } from 'react'
import './todo.css'

const todo = () => {

    const [inp, setInp] = useState('')
    const [task, setTasks] = useState([]);

    const addTask = () => {
        if (inp.trim() !== '') {
            setTasks([...task, inp]);
            setInp('')
        }
    }

    const updateTask = (ev) => {
        let item = ev.target;
        if (item.classList.contains('upBtn')) {
            const index = parseInt(item.closest('li').getAttribute('data-index'));
            if (index > 0) {
                const newTasks = [...task];
                [newTasks[index], newTasks[index - 1]] = [newTasks[index - 1], newTasks[index]];
                setTasks(newTasks);
            }
        }
        else if (item.classList.contains('downBtn')) {
            const index = parseInt(item.closest('li').getAttribute('data-index'));
            if (index < task.length - 1) {
                const newTasks = [...task];
                [newTasks[index], newTasks[index + 1]] = [newTasks[index + 1], newTasks[index]];
                setTasks(newTasks);
            }
        }
        else if (item.classList.contains('deleteBtn')) {
            const index = parseInt(item.closest('li').getAttribute('data-index'));
            setTasks(task.filter((_, i) => i !== index));
        }
        else if (item.classList.contains('completeBtn')) {
            const li = item.closest('li');
            li.classList.toggle('completed');
        }

    }

    return (
        <>
            <div className="center">
                <h1>ToDo_List</h1>
                <input
                    type="text"
                    className="inp"
                    placeholder="Enter task..."
                    value={inp}
                    onChange={(e) => setInp(e.target.value)} />
                <button onClick={addTask}>Add</button>

                <ul className='taskList' onClick={updateTask}>
                    {task.map((t, index) => (
                        <li className="" key={index} data-index={index}>
                            <div className='content'>{t}</div>
                            <div className="btnGroup">
                                <button className="upBtn">☝</button>
                                <button className="downBtn">👇</button>
                                <button className="deleteBtn">❌</button>
                                <button className="completeBtn">✔</button>
                            </div>
                        </li>
                    ))}
                </ul>


            </div>
        </>
    )
}

export default todo
