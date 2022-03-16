import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as todosCreator from "../../redux/actionsCreators/todosCreators";
import { Table, Tag, Checkbox, Button, Empty } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const TodosTable = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

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
      render: (priority) => (
        <Tag color={priority === "high" ? "red" : priority === "medium" ? "orange" : "green"} key={priority}>
          {priority.toUpperCase()}
        </Tag>
      ),
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

  useEffect(() => {
    dispatch(todosCreator.listTodos());
  }, [dispatch]);

  return (
    todos.length > 0 
    ?<Table columns={columns} dataSource={todos} rowKey="id" pagination={{ defaultPageSize: 5, showSizeChanger: true, pageSizeOptions: ["10", "15"] }} />
    :<Empty />
  )
};

export default TodosTable;
