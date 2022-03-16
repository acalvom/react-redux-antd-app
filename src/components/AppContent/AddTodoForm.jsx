import React from "react";
import { SyncOutlined, CheckOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select } from "antd";
import { useDispatch } from "react-redux";
import * as todosCreator from "../../redux/actionsCreators/todosCreators";
const { Option } = Select;

const AddTodoForm = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onFinish = (values) => dispatch(todosCreator.addTodo({ ...values, isDone: false }));
  const onReset = () => form.resetFields();

  return (
    <Form form={form} name="addTodoForm" labelCol={{ span: 6 }} wrapperCol={{ span: 16 }} initialValues={{ remember: true }} onFinish={onFinish}>
      <Form.Item label="Task" name="task" rules={[{ required: true, message: "Enter a task" }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Assigned To" name="assignedTo" rules={[{ required: true, message: "Assign the task to somebody" }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Priority" name="priority" rules={[{ required: true, message: "Set the priority" }]}>
        <Select allowClear>
          <Option value="high">HIGH</Option>
          <Option value="medium">MEDIUM</Option>
          <Option value="low">LOW</Option>
        </Select>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button className="save-todo-button" type="primary" htmlType="submit" icon={<CheckOutlined />}>
          Save
        </Button>
        <Button htmlType="button" onClick={onReset} icon={<SyncOutlined />}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddTodoForm;
