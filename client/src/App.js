import React, { useState } from "react";
import { Container } from "react-bootstrap";
import TaskList from "./components/TaskList";
import Filter from "./components/Filter";

const App = () => {
  const [filterStatus, setFilterStatus] = useState("");

  return (
    <Container>
      <h1 className="my-4 text-center">Task Tracker</h1>
      <Filter filterStatus={filterStatus} setFilterStatus={setFilterStatus} />
      <TaskList filterStatus={filterStatus} />
    </Container>
  );
};

export default App;
