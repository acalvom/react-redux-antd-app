import './App.css';
import { Layout } from 'antd';
import TodosTable from './TodosTable';
import { PageHeader, Button } from 'antd';
import { PlusOutlined } from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

function App() {

  return (
    <div className="App">
      <Layout>
        <Header className="app-header">Header</Header>
        <Layout>
          <Sider className="app-sider">Sider</Sider>
          <Content className="app-content">
            <PageHeader
              ghost={false}
              title="To do List"
              extra={<Button className='add-todo-button' key="1" icon={<PlusOutlined />}> Add Task</Button>}
            />
            <TodosTable />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
