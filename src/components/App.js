import './App.css';
import { Layout } from 'antd';
import TodosTable from './TodosTable';
const { Header, Sider, Content } = Layout;

function App() {

  return (
    <div className="App">
      <Layout>
        <Header className="app-header">Header</Header>
        <Layout>
          <Sider className="app-sider">Sider</Sider>
          <Content className="app-content">
            <TodosTable />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
