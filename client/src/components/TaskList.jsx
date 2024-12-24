import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
import TaskForm from "./TaskForm";

const TaskList = ({filterStatus}) => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/tasks");
      setTasks(response.data);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
  };

  const deleteTask = async (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      try {
        await axios.delete(`http://localhost:5000/tasks/${id}`);
        fetchTasks();
      } catch (err) {
        console.error("Error deleting task:", err);
      }
    }
  };

  const openForm = (task = null) => {
    setSelectedTask(task);
    setShowForm(true);
  };

  const closeForm = () => {
    setSelectedTask(null);
    setShowForm(false);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const filteredTasks = !filterStatus ? tasks : tasks.filter((eachValue => eachValue.status === filterStatus))

  return (
    <div>
      <Button className="mb-3" onClick={() => openForm()}>
        Add Task
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task) => (
            <tr key={task._id}>
              <td>{task.name}</td>
              <td>{task.description}</td>
              <td>{new Date(task.dueDate).toLocaleDateString()}</td>
              <td>{task.status}</td>
              <td>{task.priority}</td>
              <td>
                <Button
                  variant="warning"
                  className="me-2"
                  onClick={() => openForm(task)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => deleteTask(task._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {showForm && (
        <TaskForm
          show={showForm}
          onHide={closeForm}
          task={selectedTask}
        />
      )}
    </div>
  );
};

export default TaskList;
