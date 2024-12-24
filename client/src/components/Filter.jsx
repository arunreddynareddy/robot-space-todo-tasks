import React from "react";
import { Form } from "react-bootstrap";

const Filter = ({ filterStatus, setFilterStatus }) => {
  return (
    <Form.Select
      value={filterStatus}
      onChange={(e) => setFilterStatus(e.target.value)}
      className="mb-3"
    >
      <option value="">All</option>
      <option value="Pending">Pending</option>
      <option value="In Progress">In Progress</option>
      <option value="Completed">Completed</option>
    </Form.Select>
  );
};

export default Filter;
