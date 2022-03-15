import './App.css';
import * as todosCreator from '../redux/actionsCreators/todosCreators';
import { Layout } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import TodosTable from './TodosTable';
const { Header, Sider, Content } = Layout;


function App() {

  const todosState = useSelector(state => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(todosCreator.listTodos());
  }, [dispatch])


  return (
    <div className="App">
      <Layout>
        <Header className="app-header">Header</Header>
        <Layout>
          <Sider className="app-sider">Sider</Sider>
          <Content className="app-content">
            <TodosTable/>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
