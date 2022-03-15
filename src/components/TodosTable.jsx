import React from "react";
import { Table, Tag, Space } from "antd";

const TodosList = () => {
  const columns = [
    {
      title: "Task",
      dataIndex: "task",
      key: "task",
    },
    {
      title: "Assigned to",
      dataIndex: "assignedTo",
      key: "assignedTo",
    },
    {
      title: "Priority",
      dataIndex: "priority",
      key: "priority",
      render: (priority) => {
        let color;
        if (priority === "high") {
          color = "volcano";
        } else if (priority === "medium") color = "orange";
        else color = "green";
        return (
          <Tag color={color} key={priority}>
            {priority.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: "Done",
      dataIndex: "isDone",
      key: "isDone",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const todosListMock = [
    { id: 1, task: "Clean bathroom", assignedTo: "Andrea", priority: "medium", isDone: false },
    { id: 2, task: "Buy tomatoes", assignedTo: "Andrea", priority: "high", isDone: true },
    { id: 3, task: "Get the hair cut", assignedTo: "Paula", priority: "low", isDone: false },
    { id: 4, task: "Visit dentist", assignedTo: "Carlos", priority: "high", isDone: false },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={todosListMock} rowKey="id" />
    </div>
  );
};

export default TodosList;
