import React from "react";
import { PageHeader, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const TodosHeader = () => {
  const title = "LIST OF TODOS";

  const handleAddTodo = () => {
    console.log("Add todo");
  };

  return (
    <PageHeader
      title={title}
      extra={
        <Button className="add-todo-button" icon={<PlusOutlined />} onClick={handleAddTodo}>
          {"Add Todo"}
        </Button>
      }
    />
  );
};

export default TodosHeader;
