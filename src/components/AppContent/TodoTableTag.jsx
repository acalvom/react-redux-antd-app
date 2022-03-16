import React from "react";
import { Tag } from "antd";

const TodoTableTag = (props) => {
  const priority = props.priority;

  const setColor = () => {
    if (priority === "high") return "red";
    else if (priority === "medium") return "yellow";
    else return "green";
  };

  return (
    <Tag color={setColor()} key={priority}>
      {priority.toUpperCase()}
    </Tag>
  );
};

export default TodoTableTag;
