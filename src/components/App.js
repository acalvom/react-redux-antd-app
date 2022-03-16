import './App.css';
import { Layout } from 'antd';
import TodosTable from './AppContent/TodosTable';
import TodosHeader from './AppContent/TodosHeader';

const { Header, Sider, Content, Footer } = Layout;

function App() {

  return (
    <div className="App">
      <Layout>
        <Header className="app-header">REACT APP WITH REDUX</Header>
        <Layout>
          <Sider className="app-sider">Sider</Sider>
          <Content className="app-content">
            <TodosHeader />
            <TodosTable />
          </Content>
        </Layout>
        <Footer className="app-footer">Created by <a href='https://github.com/acalvom'> acalvom</a> in 2022</Footer>
      </Layout>
    </div>
  );
}

export default App;
