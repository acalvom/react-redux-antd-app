import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as todosCreator from "../../redux/actionsCreators/todosCreators";
import { Table, Empty, Spin } from "antd";
import TodoTableTag from "./TodoTableTag";
import TodosTableButton from "./TodosTableButton";
import TodosTableCheckbox from "./TodosTableCheckbox";

const TodosTable = () => {
  const todos = useSelector((state) => state.todosState.todos);
  const isFetching = useSelector((state) => state.todosState.isFetching);
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
      render: (priority) => <TodoTableTag priority={priority} />,
    },
    {
      title: "Done",
      dataIndex: "isDone",
      key: "isDone",
      render: (isDone, row) => <TodosTableCheckbox isDone={isDone} id={row.id} />,
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "action",
      render: (id) => <TodosTableButton id={id} />,
    },
  ];

  const paginationSettings = {
    position: ["bottomCenter"],
    defaultPageSize: 5,
    showSizeChanger: true,
    pageSizeOptions: ["10", "15"],
  };

  useEffect(() => {
    dispatch(todosCreator.startFetching());
    setTimeout(() => {
      dispatch(todosCreator.listTodos());
    }, 2000);
  }, [dispatch]);

  return isFetching ? (
    <Spin size="large" tip="Loading..." />
  ) : todos.length > 0 && !isFetching ? (
    <Table columns={columns} dataSource={todos} rowKey="id" pagination={paginationSettings} />
  ) : (
    <Empty />
  );
};

export default TodosTable;
