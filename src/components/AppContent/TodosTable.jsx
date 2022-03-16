import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as todosCreator from "../../redux/actionsCreators/todosCreators";
import { Table, Checkbox, Button, Empty } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import TodoTableTag from "./TodoTableTag";

const TodosTable = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleDeleteTodo = (id) => {
    dispatch(todosCreator.removeTodo(id));
  };

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
      render: (priority) => <TodoTableTag priority={priority} />,
    },
    {
      title: "Done",
      dataIndex: "isDone",
      key: "isDone",
      render: (isDone) => <Checkbox defaultChecked={isDone}></Checkbox>,
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "action",
      render: (id) => <Button type="danger" shape="circle" icon={<DeleteOutlined />} onClick={() => handleDeleteTodo(id)} />,
    },
  ];

  const paginationSettings = {
    position: ["bottomCenter"],
    defaultPageSize: 5,
    showSizeChanger: true,
    pageSizeOptions: ["10", "15"],
  };

  useEffect(() => {
    dispatch(todosCreator.listTodos());
  }, [dispatch]);

  return todos.length > 0 ? <Table columns={columns} dataSource={todos} rowKey="id" pagination={paginationSettings} /> : <Empty />;
};

export default TodosTable;
