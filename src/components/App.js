import './App.css';
import { Layout } from 'antd';
import TodosTable from './AppContent/TodosTable';
import TodosHeader from './AppContent/TodosHeader';

const { Header, Sider, Content } = Layout;

function App() {

  return (
    <div className="App">
      <Layout>
        <Header className="app-header">Header</Header>
        <Layout>
          <Sider className="app-sider">Sider</Sider>
          <Content className="app-content">
            <TodosHeader />
            <TodosTable />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
