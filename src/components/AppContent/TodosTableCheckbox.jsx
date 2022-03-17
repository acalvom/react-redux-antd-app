import React from "react";
import { useDispatch } from "react-redux";
import * as todosCreator from "../../redux/actionsCreators/todosCreators";
import { Checkbox } from "antd";

const TodosTableCheckbox = (props) => {
  const dispatch = useDispatch();

  const handleUpdateStatus = () => dispatch(todosCreator.toogleState(props.id, !props.isDone));

  return <Checkbox defaultChecked={props.isDone} onChange={() => handleUpdateStatus()} />;
};

export default TodosTableCheckbox;
