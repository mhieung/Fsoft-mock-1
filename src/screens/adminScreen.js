/** @format */

import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;
function AdminLayout() {
  return (
    <div>
      <Layout>
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default AdminLayout;