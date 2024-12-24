# Task Tracker Application  

A full-stack task tracking application built with the MERN (MongoDB, Express, React, Node.js) stack. This app allows users to manage tasks effectively with features like task listing, adding, editing, deleting, and filtering by status.  

## Features  

### Frontend  
- **Task Listing**: View all tasks stored in the database with details like Task Name, Description, Due Date, Status, and Priority.  
- **Add Task**: Use a modal form to add new tasks with fields:  
  - Task Name  
  - Description  
  - Due Date  
  - Status (default: Pending)  
  - Priority (Low, Medium, High)  
- **Edit Task**: Update task details using the same modal form.  
- **Delete Task**: Remove tasks with a confirmation dialog.  
- **Status Filter**: Filter tasks by their status (Pending, In Progress, Completed).  
- **Responsive Design**: Optimized for desktop and mobile devices.  

### Backend  
- **Task Management API**:  
  - `GET /tasks`: Fetch all tasks.  
  - `POST /tasks`: Add a new task.  
  - `PATCH /tasks/:id`: Update an existing task.  
  - `DELETE /tasks/:id`: Delete a task.  
- **Database Schema**:  
  Tasks are stored in a MongoDB collection with the following fields:  
  - `name` (String): Name of the task.  
  - `description` (String): Detailed description of the task.  
  - `dueDate` (Date): Deadline for the task.  
  - `status` (Enum): Task status (Pending, In Progress, Completed).  
  - `priority` (Enum): Task priority (Low, Medium, High).  

## Prerequisites  

Before running the application, ensure the following are installed on your system:  
- Node.js (v14 or above)  
- MongoDB (locally or via a cloud service like MongoDB Atlas)  
- npm or yarn  

## Installation  

### 1. Clone the Repository  
```bash  
git clone <repository-url>  
cd task-tracker-app  
