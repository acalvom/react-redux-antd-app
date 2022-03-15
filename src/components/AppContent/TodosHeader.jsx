import React, { Fragment, useState } from "react";
import { PageHeader, Button, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import AddTodoForm from "./AddTodo/AddTodoForm";

const TodosHeader = () => {
  const title = "LIST OF TODOS";

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAddTodo = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Fragment>
      <PageHeader
        title={title}
        extra={
          <Button className="add-todo-button" icon={<PlusOutlined />} onClick={handleAddTodo}>
            Add Todo
          </Button>
        }
      />
      
      <Modal title="Basic Modal" visible={isModalVisible} onCancel={handleCancel} footer={null}>
        <AddTodoForm />
      </Modal>
    </Fragment>
  );
};

export default TodosHeader;
