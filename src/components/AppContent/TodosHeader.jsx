import React, { Fragment, useState } from "react";
import { PageHeader, Button, Modal, Form, Input, Select } from "antd";

import { PlusOutlined } from "@ant-design/icons";
const { Option } = Select;
const TodosHeader = () => {
  const title = "LIST OF TODOS";

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAddTodo = () => {
    setIsModalVisible(true);
  };


  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Fragment>
      <PageHeader
        title={title}
        extra={
          <Button className="add-todo-button" icon={<PlusOutlined />} onClick={handleAddTodo}>
            {"Add Todo"}
          </Button>
        }
      />
      <Modal title="Basic Modal" visible={isModalVisible} onCancel={handleCancel} footer={null}>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Task"
            name="task"
            rules={[
              {
                required: true,
                message: "Please, enter a task",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Assigned To"
            name="assignedTo"
            rules={[
              {
                required: true,
                message: "Assign the task to somebody",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Priority" name="priority">
            <Select allowClear>
              <Option value="high">high</Option>
              <Option value="medium">medium</Option>
              <Option value="low">low</Option>
            </Select>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </Fragment>
  );
};

export default TodosHeader;
