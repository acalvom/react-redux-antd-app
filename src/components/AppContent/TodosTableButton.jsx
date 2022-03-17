import React from "react";
import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import * as todosCreator from "../../redux/actionsCreators/todosCreators";

const TodosTableButton = (props) => {
  const dispatch = useDispatch(); 

  const handleDeleteTodo = () => dispatch(todosCreator.removeTodo(props.id));

  return <Button type="danger" shape="circle" icon={<DeleteOutlined />} onClick={() => handleDeleteTodo()} />;
};

export default TodosTableButton;
