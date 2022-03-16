import React from "react";
import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const TodosTableButton = (props) => {
  const id = props.id;
  const handleDeleteTodo = props.handleDeleteTodo;

  return <Button type="danger" shape="circle" icon={<DeleteOutlined />} onClick={() => handleDeleteTodo(id)} />;
};

export default TodosTableButton;
