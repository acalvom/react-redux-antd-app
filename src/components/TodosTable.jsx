import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as todosCreator from "../redux/actionsCreators/todosCreators";
import { Table, Tag, Checkbox, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const TodosTable = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(todosCreator.listTodos());
  }, [dispatch]);

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
        return (
          <Tag color={priority === "high" ? "red" : priority === "medium" ? "orange" : "green"} key={priority}>
            {priority.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: "Done",
      dataIndex: "isDone",
      key: "isDone",
      render: (isDone) => <Checkbox defaultChecked={isDone}></Checkbox>,
    },
    {
      title: "Action",
      key: "action",
      render: () => <Button type="danger" shape="circle" icon={<DeleteOutlined />} />,
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={todos} rowKey="id" />
    </div>
  );
};

export default TodosTable;
